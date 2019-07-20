import {gameConfig} from "./gameConfig";

export class WinHandler {
    constructor(){

        Object.assign(this, observableMixin);
        this.by({"notify:serverManager.newResponse" : this.createWinConfig});

    }

    /**
     * generate win config depends on server response
     * @param {object} serverConfig
     * @param {number} serverConfig.winAmount amount of win point
     * @param {array} serverConfig.winLines array with win bet lines
     * @param {array} serverConfig.winSymbols array with win symbols
     */
    createWinConfig (serverConfig) {
        let result = null;

        if(serverConfig.winAmount > 0){

            result = {};
            result.matrix = this.createTemplateMatrix();
            result.winAmount = serverConfig.winAmount;
            result.winLines = serverConfig.winLines;

            for (let i = 0; i < serverConfig.winSymbols.length; i++){
                let curLine = serverConfig.winSymbols[i];

                for(let j = 0; j < curLine.length; j++){
                    let curReel =  result.matrix[j];
                    let symbIndex = curLine[j];

                    curReel[symbIndex] = true;
                }
            }

        }

        this.fireEvent("notify:winHandler.newResponse", result);
    }

    /**
     * create matrix depends on gameConfig params
     * @returns {Array} matrix with false params
     */
    createTemplateMatrix(){
        let template = [];

        let rowsNum = gameConfig.gameSize.rows;
        let reelsNum = gameConfig.gameSize.reels;
        for (let i = 0; i < reelsNum; i++){
            let curReel = [];

            for(let j = 0; j < rowsNum; j++){
                curReel.push(false)
            }
            template.push(curReel);
        }

        return template;
    }
}