import {Line} from "./line";
import {gameConfig} from "../main/gameConfig";
import {observableMixin} from "../main/observableMixin";

export class BetLines extends PIXI.Container{
    constructor() {
        super();

        Object.assign(this, observableMixin);

        this.linePoints = this.addLinePoints();
        this.allLines = this.addLines(this.linePoints);

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
        const config = Object.assign({}, gameConfig);
        const betLines = config.betLines;
        const positions = config.reelsPosition;
        const topOffset = positions.topOffset + positions.reels.slotLength/2;

        const linePositions = [];

        for(let i = 0; i < betLines.length; i++) {
            const curBetLine = betLines[i];
            const curLinePoints = [];

            for(let j = 0; j < curBetLine.length; j++){

                const xPoint = positions.reelsPoints[j].x;
                const yPoint = positions.symbolsPoint[curBetLine[j]].y + topOffset;

                curLinePoints.push({x: xPoint, y: yPoint});
            }

            linePositions.push(curLinePoints)
        }

        return linePositions;
    }

    /**
     * create lines using lines points and add it to array
     * @param {array} linePoints array with points for lines
     * @returns {Array} array with lines
     */
    addLines (linePoints) {
        const allLines = [];
        for(let i = 0; i < linePoints.length; i++) {

            const config = linePoints[i];
            const betLine = new Line(config);

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
        if(config || Array.isArray(config.winLines) ){
            for(let i = 0; i < config.winLines.length; i++){
                const curLine = config.winLines[i];
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