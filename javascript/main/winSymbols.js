import {gameConfig} from "./gameConfig";
import {observableMixin} from "./observableMixin";

export class WinSymbols {
    constructor(){
        Object.assign(this, observableMixin);
        this.by({"notify:serverManager.newResponse" : this.createSymbolsConfig});
    }

    /**
     * generate win config depends on server response
     * @param {object} serverResult
     * @param {number} serverResult.winAmount amount of win point
     * @param {array} serverResult.winLines array with win bet lines
     * @param {array} serverResult.winSymbols array with win symbols
     */
    createSymbolsConfig (serverResult) {
        if(serverResult.winAmount === 0){
            return;
        }

        const matrix = this.createTemplateMatrix();

        for (let i = 0; i < serverResult.winSymbols.length; i++){
            const curLine = serverResult.winSymbols[i];

            for(let j = 0; j < curLine.length; j++){
                const curReel =  matrix[j];
                const symbIndex = curLine[j];

                curReel[symbIndex] = true;
            }
        }
        this.fireEvent("notify:winSymbolsProcessed", matrix);

    }

    /**
     * create matrix depends on gameConfig params
     * @returns {array} matrix with false params
     */
    createTemplateMatrix(){
        const template = [];

        const rowsNum = gameConfig.gameSize.rows;
        const reelsNum = gameConfig.gameSize.reels;
        for (let i = 0; i < reelsNum; i++){
            const curReel = [];

            for(let j = 0; j < rowsNum; j++){
                curReel.push(false)
            }
            template.push(curReel);
        }

        return template;
    }
}