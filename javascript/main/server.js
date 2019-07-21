import {randomInt} from "../utils";
import {gameConfig} from "./gameConfig";


export class ServerMock {
    constructor() {
        this.reelsetsList = gameConfig.addReelsets();
        this.betLines = gameConfig.activeBetLines;
        this.spinResult = [];
        Object.assign(this, observableMixin);

        this.by({"notify:spinStart" : this.start});

        this.generatedResponse = null;
    }

    /**
     * upon request from client creates spin/bet result and inform the client
     * @param {number} betSize multiplier for win points
     */
    start(betSize){
        this.currentReelset = this.selectReelset(this.reelsetsList);
        this.spinResult = this.selectPositions(this.currentReelset);
        this.generatedResponse = this.checkBetLines (this.spinResult, betSize);
        setTimeout(() => {
            this.fireEvent("notify:serverManager.newResponse", this.generatedResponse);
            this.generatedResponse = null;
        },1000);

    }

    /**
     * randomly select reelset from reelsetsList
     * @param {array} reelsetsList array with reelsets
     * @returns {array} selected reelset
     */
    selectReelset (reelsetsList) {
        let index = randomInt(0, reelsetsList.length - 1);
        return reelsetsList[index];
    }

    /**
     * randomly selects start positions on each reel and generate new array with next 3 symbols
     * @param {array} currentReelset array with possible values for each reel
     * @returns {Array} two-levels array with spin result
     */
    selectPositions (currentReelset) {

        const spinResult = [];

        for(let i = 0; i < currentReelset.length; i++){
            let curSet = currentReelset[i];

            // 3 symbols after startPoint are required
            let startPoint = randomInt(0, curSet.length - 3);
            let curReel = [];

            curReel.push(curSet[startPoint]);
            curReel.push(curSet[startPoint + 1]);
            curReel.push(curSet[startPoint + 2]);

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
     *          {array} resultConfig.spinResult two-levels array with spin result
     */
    checkBetLines (spinResult, betSize){

        let winPoints = 0;
        let winSymbols = [];
        let winLines = [];
        let resultConfig = {};

        for (let i = 0; i < this.betLines.length; i++) {
            let currentLine  = this.betLines[i];
            let symbsMatched = 1;

            let symbolNum = [];

            for(let j = 0; j < spinResult.length - 1; j++){
                if (spinResult[j][currentLine[j]] === spinResult[j + 1][currentLine[j+1]]) {
                    symbsMatched +=1;
                    if (symbsMatched < 3){
                        symbolNum.push(currentLine[j]);
                        symbolNum.push(currentLine[j+1]);

                    } else {
                        symbolNum.push(currentLine[j+1]);
                    }

                } else {
                    break;
                }
            }

            if (symbsMatched > 2) {
                winSymbols.push(symbolNum);
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

            symbsMatched = 1;
        }

        resultConfig.winAmount =  winPoints * betSize;
        resultConfig.winLines = winLines;
        resultConfig.winSymbols = winSymbols;
        resultConfig.spinResult = spinResult;

        return resultConfig;
    }
}
