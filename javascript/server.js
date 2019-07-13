import {Observable} from "./observable";
import {randomInt} from "./utils";
import {betSelector} from "./engine";


export class Server extends Observable{
    constructor() {
        super();
        this.addReelsets();
        this.spinResult = [];
        this.betResult = null;
    }

    addReelsets () {
        this.reelsetsList = [
            [
                [1,0,2,0,2,0,1,0,2],
                [0,0,2,1,0,1,2,0,2],
                [1,1,2,2,2,0,1,0,1],
                [1,1,0,0,2,0,0,1,2],
                [0,0,1,1,0,0,2,2,1]
            ],
            [
                [0,2,2,1,0,0,2,1,2],
                [2,2,1,1,0,1,2,0,1],
                [1,1,0,2,1,0,2,0,0],
                [2,1,1,2,0,0,1,0,2],
                [1,0,2,2,2,1,0,2,0]
            ],
            [
                [1,2,0,1,0,1,2,1,2],
                [1,1,0,0,2,0,0,1,2],
                [0,1,0,2,1,0,2,0,1],
                [1,0,2,2,2,1,0,2,0],
                [1,1,0,0,2,0,0,1,2]
            ]
        ]
    }
    start(betLines){
        this.selectReelset();
        this.selectPositions();
        this.betResult = this.checkBetLines (betLines, this.spinResult);
        this.fireEvent("notify:spinAnimationStart", this.spinResult);
        if(this.betResult) {
            this.fireEvent("notify:winBetWasMade", this.betResult);
        }
        this.betResult = null;
    }

    selectReelset () {
        let index = randomInt(0, this.reelsetsList.length - 1);
        this.currentReelset = this.reelsetsList[index];
    }

    selectPositions () {

        this.spinResult = [];

        for(let i = 0; i < this.currentReelset.length; i++){
            let curSet = this.currentReelset[i];

            // I should be able to use 3 symbols after startPoint
            let startPoint = randomInt(0, curSet.length - 3);
            let curReel = [];

            // I can use one more cycle here but I'm not sure if it's necessary
            curReel.push(curSet[startPoint]);
            curReel.push(curSet[startPoint + 1]);
            curReel.push(curSet[startPoint + 2]);

            this.spinResult.push(curReel);
        }
    }

    checkBetLines (betLines, betResult){

        let winPoints = 0;
        let winSymbols = [];
        let winLines = [];
        let resultConfig = {};

        for (let i = 0; i < betLines.length; i++) {
            let currentLine  = betLines[i];
            let symbsMatched = 1;

            let symbolNum = [];

            for(let j = 0; j < betResult.length - 1; j++){
                if (betResult[j][currentLine[j]] === betResult[j + 1][currentLine[j+1]]) {
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

        if (winPoints > 0) {
            //I have used sprites for selector, starting from 1, that's why I have to add +1 here;
            let betMultiplier = betSelector.currentValue + 1;

            resultConfig.winAmount =  winPoints * betMultiplier;
            resultConfig.winLines = winLines;
            resultConfig.winSymbols = winSymbols;

            return resultConfig;
        }
    }
}
