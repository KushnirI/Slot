import {Reel} from "./reel"
import {gameConfig} from "../main/gameConfig";

export class Reels extends PIXI.Container {
    constructor() {
        super();

        this.y = gameConfig.reelsPosition.topOffset;

        this.allReels = this.addReels();
        this.mask = this.addMask();
        this.currentWinSymbols = null;

        app.stage.addChild(this);
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
     * start spinning reels
     * @returns {Promise<any>} promise
     */
    startReelsSpin() {
        return Promise.all(this.allReels.map(reel => {
            return reel.start();
        }))
    }

    /**
     * @param {array} spinResult 2d array with symbols, on which each reel has to stop
     * @param {number} symbsBfResult amount of random symbols before result
     * @returns {Promise<any>} promise
     */
    startStopSequence(spinResult, symbsBfResult = 6) {
        return Promise.all(this.allReels.map((reel, i) => {
            return reel.startStopSequence(spinResult[i], symbsBfResult + i * 2);
        }))
    }

    /**
     * @param {array|null} winSymbols 2d array with win symbols or null if no win symbols
     */
    updateWinSymbols (winSymbols) {
        this.currentWinSymbols = winSymbols;
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
     * show win/loss animation for each symbol
     */
    showWinAnimation() {
        for (let i = 0; i < this.currentWinSymbols.length; i++) {
            const curResultReel = this.currentWinSymbols[i];
            const curReel = this.allReels[i];

            curReel.showWinSymb(curResultReel);
        }
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