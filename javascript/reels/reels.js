import {changeAnimRequireTo} from "../engine";
import {Reel} from "./reel"
import {gameConfig} from "../main/gameConfig";

export class Reels extends PIXI.Container{
    constructor() {
        super();

        this.y = gameConfig.reelsPosition.topOffset;

        this.allReels = this.addReels();
        this.mask = this.addMask();

        this.reelsCounter = this.allReels.length;
        this.winAnimRequired = false;
        this.resultConfig = null;

        app.stage.addChild(this);

        Object.assign(this, observableMixin);

        this.by({
            "notify:spinStart" : this.start,
            "notify:serverManager.newResponse" : this.addServerValues,
            "notify:winHandler.newResponse": this.addWinHandlerValues
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
     * start spinning reels
     */
    start() {
        changeAnimRequireTo(true);

        for(let i = 0; i < this.allReels.length; i++ ){
            this.allReels[i].start( this.onReelStopped.bind(this) );
        }
    }

    /**
     *
     * @param {object} resultConfig resultConfig from server
     * @param {array} resultConfig.spinResult array with bet result for each reel
     * @param {number} resultConfig.winAmount win points on current bet
     * @param {number} symbsBfResult amount of random symbols before result
     */
    addServerValues (resultConfig, symbsBfResult = 6) {

        for(let i = 0; i < this.allReels.length; i++ ){
            this.allReels[i].addServerValues(resultConfig.spinResult[i], symbsBfResult+i, this.onReelStopped.bind(this));
        }
    }

    /**
     * sets result config
     * @param {object} resultConfig from winHandler
     */
    addWinHandlerValues (resultConfig) {
        if(resultConfig) {
            this.winAnimRequired = true;
        }
        this.resultConfig = resultConfig;
    }

    /**
     * when each reel finished spin, it reduces reelsCounter
     * when all reels are finished, reset the counter, and check bet lines
     */
    onReelStopped () {
        this.reelsCounter--;
        if (this.reelsCounter === 0) {
            this.reelsCounter = this.allReels.length;
            changeAnimRequireTo(false);

            this.showWinAnimation(this.resultConfig);
            this.fireEvent("notify:spinOver", this.resultConfig);
        }
    }

    /**
     * if winAnimRequired, show win/loss animation for each symbol
     * @param {object} resultConfig
     * @param {array} resultConfig.matrix two-levels array with true/false param
     */
    showWinAnimation(resultConfig) {
        if (this.winAnimRequired){

            for (let i = 0; i < resultConfig.matrix.length; i++){
                let curResultReel = resultConfig.matrix[i];
                let curReel = this.allReels[i];

                for(let j = 0; j < curResultReel.length; j++){

                    if(curResultReel[j]){
                        curReel.symbols[j].playWinAnimation()
                    } else {
                        curReel.symbols[j].playLossAnimation()
                    }

                }
            }
            this.winAnimRequired = false;

        }
    }

}