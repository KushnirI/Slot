import {Reel} from "./reel"
import {gameConfig} from "../main/gameConfig";
import {observableMixin} from "../main/observableMixin";

export class Reels extends PIXI.Container {
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
            "stateChangedTo:Spin": this.start,
            "notify:serverManager.newResponse": this.serverResponseReceived,
            "notify:winSymbolsProcessed": this.addWinHandlerValues,
            "stateChangedTo:Idle": this.playIdle,
            "spin:forcedStop": this.forcedStop
        });
    }

    /**
     * creates reels depending on gameConfig params
     * @returns {Array} array with reels
     */
    addReels() {
        let reelsPoints = gameConfig.reelsPosition.reelsPoints;
        let allReels = [];

        for (let i = 0; i < reelsPoints.length; i++) {
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
    startReelsSpin() {
        return Promise.all(this.allReels.map(reel => {
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
    startStopSequence(symbsBfResult = 6) {
        return Promise.all(this.allReels.map((reel, i) => {
            return reel.startStopSequence(this.resultConfig.spinResult[i], symbsBfResult + i * 2);
        }))
    }

    /**
     * skips spinning animation
     */
    forcedStop() {
        this.allReels.forEach(reel => {
            reel.forcedStop();
        })
    }

    /**
     * sets result config
     * @param {object} resultConfig from winHandler
     */
    addWinHandlerValues(resultConfig) {
        if (resultConfig) {
            this.winAnimRequired = true;
        }
        this.symbolsResultConfig = resultConfig;
    }

    /**
     * depending on winAnimRequired fire event and show win/loss animation for each symbol
     */
    onSpinComplete() {
        if (!this.winAnimRequired) {
            this.fireEvent("playIdle");
            return;
        }

        this.fireEvent("playWin");
        let matrix = this.symbolsResultConfig;
        for (let i = 0; i < matrix.length; i++) {
            const curResultReel = matrix[i];
            const curReel = this.allReels[i];

            curReel.showWinSymb(curResultReel);
        }

        this.winAnimRequired = false;
    }

    /**
     * sets default symbols params for each symbol
     */
    playIdle() {
        this.allReels.forEach(reel => {
            reel.playIdle();
        })
    }
}