import {changeReelsSpinningTo} from "../engine";
import {Reel} from "./reel"
import {gameConfig} from "../main/gameConfig";
import {observableMixin} from "../main/observableMixin";

export class Reels extends PIXI.Container{
    constructor() {
        super();

        this.y = gameConfig.reelsPosition.topOffset;

        this.allReels = this.addReels();
        this.mask = this.addMask();

        this.winAnimRequired = false;
        this.resultConfig = null;

        app.stage.addChild(this);

        Object.assign(this, observableMixin);

        this.by({
            "notify:spinStart" : this.start,
            "notify:serverManager.newResponse" : this.serverResponseReceived,
            "notify:winSymbolsProcessed": this.addWinHandlerValues,
            "notify:betChanged" : this.playIdle
        })
    }

    /**
     * creates reels depending on gameConfig params
     * @returns {Array} array with reels
     */
    addReels() {
        let reelsPoints = gameConfig.reelsPosition.reelsPoints;
        let allReels = [];

        for(let i = 0; i < reelsPoints.length; i++){
            let curReelPoints = reelsPoints[i];
            let reel = new Reel(curReelPoints.x, curReelPoints.y);
            allReels.push(reel);
            this.addChild(reel)
        }
        return allReels;
    }

    /**
     * create a mask to limit visible zone
     * @returns {PIXI.Graphics} reels mask
     */
    addMask() {
        let reelsMask = new PIXI.Graphics();
        reelsMask.beginFill();
        reelsMask.drawRect(0, -this.y, gameConfig.gameSize.width, gameConfig.gameSize.height);
        this.addChild(reelsMask);

        return reelsMask;
    }

    /**
     * processing the spin
     */
    start() {
        Promise.all([
            this.startReelsSpin(),
            new Promise(resolve => this.serverResponseResolve = resolve)
        ])
            .then(() => this.startStopSequence())
            .then(() => this.onSpinComplete())

    }

    /**
     * start spinning reels
     * @returns {Promise<any>} promise
     */
    startReelsSpin () {
        changeReelsSpinningTo(true);
        return Promise.all( this.allReels.map( reel => {
            return reel.start();
        }))
    }

    /**
     *
     * @param {object} resultConfig resultConfig from server
     * @param {array} resultConfig.spinResult array with bet result for each reel
     * @param {number} resultConfig.winAmount win points on current bet
     */
    serverResponseReceived(resultConfig) {
        this.resultConfig = resultConfig;
        this.serverResponseResolve();
    }

    /**
     * @param {number} symbsBfResult amount of random symbols before result
     * @returns {Promise<any>} promise
     */
    startStopSequence ( symbsBfResult = 6) {
            return Promise.all(this.allReels.map( (reel, i) => {
                return reel.startStopSequence( this.resultConfig.spinResult[i], symbsBfResult+i*2);
            }))
    }

    /**
     * sets result config
     * @param {object} resultConfig from winHandler
     */
    addWinHandlerValues (resultConfig) {
        if(resultConfig) {
            this.winAnimRequired = true;
        }
        this.symbolsResultConfig = resultConfig;
    }

    /**
     * when each reel finished spin, it reduces reelsCounter
     * when all reels are finished, reset the counter, and check bet lines
     */
    onSpinComplete () {
        changeReelsSpinningTo(false);

        setTimeout( () => {
            this.showWinAnimation(this.symbolsResultConfig);
            this.fireEvent("notify:spinOver", this.resultConfig);
        },100);

    }

    /**
     * if winAnimRequired, show win/loss animation for each symbol
     * @param {array} matrix 2d array with true/false param
     */
    showWinAnimation(matrix) {
        if (!this.winAnimRequired){
            return;
        }

        for (let i = 0; i < matrix.length; i++){
            const curResultReel = matrix[i];
            const curReel = this.allReels[i];

            curReel.showWinSymb(curResultReel);
        }

        this.winAnimRequired = false;
    }

    playIdle() {
        this.allReels.forEach( reel => {
            reel.playIdle();
        })
    }
}