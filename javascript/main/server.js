import {randomInt} from "../utils";
import {gameConfig} from "./gameConfig";
import {observableMixin} from "./observableMixin";

export class ServerMock {
    constructor() {
        this.reelsetsList = gameConfig.reelsets;
        this.betLines = gameConfig.betLines;
        this.reelsLength = gameConfig.gameSize.rows;
        Object.assign(this, observableMixin);

        this.by({"notify:spinStart" : this.start});

    }

    /**
     * upon request from client creates spin/bet result and inform the client
     * @param {number} betSize multiplier for win points
     */
    start(betSize){
        const currentReelset = this.selectReelset(this.reelsetsList);
        const spinResult = this.selectPositions(currentReelset);
        const generatedResponse = this.checkBetLines (spinResult, betSize);
        setTimeout(() => {
            this.fireEvent("notify:serverManager.newResponse", generatedResponse);
        },1000);

    }

    /**
     * randomly select reelset from reelsetsList
     * @param {array} reelsetsList array with reelsets
     * @returns {array} selected reelset
     */
    selectReelset (reelsetsList) {
        const index = randomInt(0, reelsetsList.length - 1);
        return reelsetsList[index];
    }

    /**
     * randomly selects start positions on each reel and generate new array with next 3 symbols
     * @param {array} currentReelset array with possible values for each reel
     * @returns {Array} 2d array with spin result
     */
    selectPositions (currentReelset) {

        const spinResult = [];

        for(let i = 0; i < currentReelset.length; i++){
            const curSet = currentReelset[i];


            const startPoint = randomInt(0, curSet.length - this.reelsLength);
            const curReel = [];

            for(let j = 0; j < this.reelsLength; j++) {
                curReel.push(curSet[startPoint + j]);
            }

            spinResult.push(curReel);
        }
        return spinResult;
    }

    /**
     * depends on spin result check bet lines and generates result config
     * @param {array} spinResult two-levels array with spin result
     * @param {number} betSize win points multiplier
     * @returns {object} resultConfig result configuration of current bet
     *          {number} resultConfig.winAmount amount of win point
     *          {array} resultConfig.winLines array with win bet lines
     *          {array} resultConfig.winSymbols array with win symbols
     *          {array} resultConfig.spinResult 2d array with spin result
     */
    checkBetLines (spinResult, betSize){
        let winPoints = 0;
        const winSymbols = [];
        const winLines = [];

        const response = {};

        for (let i = 0; i < this.betLines.length; i++) {
            const currentLine  = this.betLines[i];
            let symbsMatched = 1;

            const positionsOnReels = [];

            const generatedLine = spinResult.map( (reel, i) => {
                const curIndex = currentLine[i];
                positionsOnReels.push(curIndex);
                return reel[curIndex];
            });

            for(let j = 0; j < generatedLine.length - 1; j++){
                if (generatedLine[j] === generatedLine[j+1]) {

                    symbsMatched +=1;

                } else {
                    break;
                }
            }


            if (symbsMatched > 2) {

                winSymbols.push(positionsOnReels.slice(0, symbsMatched));
                winLines.push(i);

                if(symbsMatched === 3){
                    winPoints += 10;
                }

                if(symbsMatched === 4){
                    winPoints += 30;
                }

                if(symbsMatched === 5){
                    winPoints += 100;
                }
            }

        }

        response.winAmount =  winPoints * betSize;
        response.winLines = winLines;
        response.winSymbols = winSymbols;
        response.spinResult = spinResult;

        return response;

    }
}
