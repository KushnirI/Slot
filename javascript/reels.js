import {gameSize, app, changeAnimRequireTo, betLines, renderLoop, winScreen} from "./engine";
import {Reel} from "./reel";

// I guess this class is overloaded but I haven't found a solution how to handle win lines other way
export class Reels extends PIXI.Container{
    constructor() {
        super();

        this.allReels = [];

        for(let i = 0; i < gameSize.reels; i++){
            let reel = new Reel(gameSize.width/gameSize.reels * i,0,gameSize.rows, this.reelOnComplete.bind(this));
            this.allReels.push(reel);
            this.addChild(reel)
        }

        this.addMask();

        this.reelsCounter = 0;
        this.currentWinLines = [];

        renderLoop.push(this);
        app.stage.addChild(this);
    }

    /**
     *
     * @param {number} symbsBfResult amount of symbols before result
     */
    start(symbsBfResult) {
        changeAnimRequireTo(true);
        this.spinReels(symbsBfResult);
    }

    /**
     *
     * @param {number} symbsBfResult amount of symbols before result
     */
    spinReels (symbsBfResult) {
        this.allReels.forEach( reel => {
            reel.spin(symbsBfResult);
            reel.symbolsBeforeResult = symbsBfResult;
        })
    }

     addMask() {
        let reelsMask = new PIXI.Graphics();
        app.stage.addChild(reelsMask);
        reelsMask.position.set(0,0);
        reelsMask.lineStyle(0);
        reelsMask.clear();

        reelsMask.beginFill();
        reelsMask.drawRect(0, 0, gameSize.width, gameSize.height);
        this.mask = reelsMask;
    }

    update() {
        if (this.reelsCounter === this.allReels.length) {
            this.reelsCounter = 0;
            this.checkWinLines();
        }
    }

    checkWinLines (){
        let winPoints = 0;

        for (let i = 0; i < betLines.length; i++) {
            let currentLine  = betLines[i];
            let symbsMatched = 1;

            let symbols = [];

            for(let j = 0; j < this.allReels.length; j++){

                if ( this.allReels[j + 1] && this.allReels[j].symbols[currentLine[j]].type === this.allReels[j + 1].symbols[currentLine[j+1]].type) {
                    symbsMatched +=1;
                    if (symbsMatched < 3){
                        symbols.push(this.allReels[j].symbols[currentLine[j]]);
                        symbols.push(this.allReels[j+1].symbols[currentLine[j+1]]);
                    } else {
                        symbols.push(this.allReels[j+1].symbols[currentLine[j+1]]);
                    }

                } else {
                    break;
                }
            }

            if (symbsMatched > 2) {

                this.currentWinLines.push(...symbols);

                symbols.forEach( symbol => {
                    symbol.makeScale();
                });

                if(symbsMatched === 3){
                    // TODO add symbols cost param and multiply winnings on it
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
            // TODO create win constructor and make in visible here
            winScreen.showScreen(winPoints);
            winPoints = 0;
        }
    }

    reelOnComplete () {
        this.reelsCounter++;
    }

    clearCurrentWinLines () {
        this.currentWinLines = [];
    }
}