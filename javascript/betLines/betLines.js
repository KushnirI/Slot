import {Line} from "./line";
import {gameConfig} from "../main/gameConfig";

export class BetLines extends PIXI.Container{
    constructor() {
        super();

        this.linePoints = this.addLinePoints();

        this.allLines = this.addLines(this.linePoints);

        Object.assign(this, observableMixin);
        this.by({
            "notify:spinStart" : this.hideWinLines,
            "notify:spinOver" : this.showWinLines,
            "notify:betChanged" : this.hideWinLines
        });

        app.stage.addChild(this);

    }

    /**
     * create line points depends on gameConfig params and add it to array
     * @returns {Array} array with line points
     */
    addLinePoints () {

        let betLines = gameConfig.activeBetLines;
        let positions = gameConfig.reelsPosition;
        let topOffset = positions.topOffset + positions.reels.slotLength/2;

        let linePositions = [];

        for(let i = 0; i < betLines.length; i++) {
            let curBetLine = betLines[i];
            let curLinePoints = [];

            for(let j = 0; j < curBetLine.length; j++){

                let xPoint = positions.reelsPoints[j].x;
                let yPoint = positions.symbolsPoint[curBetLine[j]].y + topOffset;

                curLinePoints.push({x: xPoint, y: yPoint});
            }

            linePositions.push(curLinePoints)
        }

        return linePositions;
    }

    /**
     * create lines using lines points and add it to array
     * @param {array} linePoints array with pints for lines
     * @returns {Array} array with lines
     */
    addLines (linePoints) {
        let allLines = [];
        for(let i = 0; i < linePoints.length; i++) {
            let betLine;
            let config = linePoints[i];

            betLine = new Line(config);

            allLines.push(betLine);
            this.addChild(betLine);
        }

        return allLines;
    }

    /**
     *  show win lines depends on config
     * @param {object} config result config
     * @param {array} config.winLines array with win lines
     */
    showWinLines(config) {
        if(config){
            for(let i = 0; i < config.winLines.length; i++){
                let curLine = config.winLines[i];
                this.allLines[curLine].showWinLine();
            }
        }
    }

    /**
     * set default params for all lines
     */
    hideWinLines() {
        this.allLines.forEach( (line) => {
            line.hideWinLine();
        });
    }
}