import {gameConfig} from "./gameConfig";

export class WinSymbols {
    /**
     * generate win symbols config
     * @param {array} winSymbols array with win symbols
     * @returns {array|null} if no win symbols returns null, else returns 2d array with win symbols
     */
    createSymbolsConfig (winSymbols) {
        if(winSymbols.length === 0){
            return null;
        }

        const matrix = this.createTemplateMatrix();

        for (let i = 0; i < winSymbols.length; i++){
            const curLine = winSymbols[i];

            for(let j = 0; j < curLine.length; j++){
                const curReel =  matrix[j];
                const symbIndex = curLine[j];

                curReel[symbIndex] = true;
            }
        }
        return matrix;
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