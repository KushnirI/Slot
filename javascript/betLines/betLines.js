import {Line} from "./line";
import {gameConfig} from "../main/gameConfig";
import {observableMixin} from "../main/observableMixin";

export class BetLines extends PIXI.Container {
    constructor() {
        super();

        Object.assign(this, observableMixin);

        this.linePoints = this.addLinePoints();
        this.allLines = this.addLines(this.linePoints);

        this.currentWinLines = [];

        this.by({
            "notify:serverManager.newResponse": this.updateWinLines,
            "stateChangedTo:Win": this.showWinLines,
            "stateCompleted:Win": this.hideWinLines
        });

        app.stage.addChild(this);
    }

    /**
     * create line points depends on gameConfig params and add it to array
     * @returns {Array} array with line points
     */
    addLinePoints() {
        const config = Object.assign({}, gameConfig);
        const betLines = config.betLines;
        const positions = config.reelsPosition;
        const topOffset = positions.topOffset + positions.reels.slotLength / 2;

        const linePositions = [];

        for (let i = 0; i < betLines.length; i++) {
            const curBetLine = betLines[i];
            const curLinePoints = [];

            for (let j = 0; j < curBetLine.length; j++) {

                const xPoint = positions.reelsPoints[j].x;
                const yPoint = positions.symbolsPoint[curBetLine[j]].y + topOffset;

                curLinePoints.push({x: xPoint, y: yPoint});
            }

            linePositions.push(curLinePoints);
        }

        return linePositions;
    }

    /**
     * create lines using lines points and add it to array
     * @param {array} linePoints array with points for lines
     * @returns {Array} array with lines
     */
    addLines(linePoints) {
        const allLines = [];
        for (let i = 0; i < linePoints.length; i++) {

            const config = linePoints[i];
            const betLine = new Line(config);

            allLines.push(betLine);
            this.addChild(betLine);
        }

        return allLines;
    }

    /**
     * @param {object} config server's result config
     * @param {array} config.winLines array with win lines
     */
    updateWinLines(config) {
        this.currentWinLines = config.winLines;
    }

    /**
     *  show current win lines
     */
    showWinLines() {
        for (let i = 0; i < this.currentWinLines.length; i++) {
            const curLine = this.currentWinLines[i];
            this.allLines[curLine].showWinLine();
        }
    }

    /**
     * set default params for all lines
     */
    hideWinLines() {
        this.allLines.forEach((line) => {
            line.hideWinLine();
        });
    }
}