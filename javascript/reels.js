import {changeAnimRequireTo, spinButton, events} from "./engine";
import {Reel} from "./reel";

// I guess this class is overloaded but I haven't found a solution how to handle win lines other way
export class Reels extends PIXI.Container{
    constructor() {
        super();

        this.allReels = [];

        for(let i = 0; i < gameSize.reels; i++){
            let reel = new Reel(gameSize.width/gameSize.reels * i, 0,gameSize.rows);
            this.allReels.push(reel);
            this.addChild(reel)
        }

        this.addMask();

        this.reelsCounter = this.allReels.length;
        this.currentWinLines = [];
        this.winAnimRequired = false;
        this.winConfig = null;

        app.stage.addChild(this);

        this.by({
            "notify:spinAnimationStart" : this.start,
            "notify:winBetWasMade" : this.setWinAnimation
        })

    }

    /**
     * create a mask to limit visible zone
     */
    addMask() {
        let reelsMask = new PIXI.Graphics();
        reelsMask.beginFill();
        reelsMask.drawRect(0, 0, gameSize.width, gameSize.height);
        this.addChild(reelsMask);

        this.mask = reelsMask;
    }

    /**
     *
     * @param {array} betResult array with bet result for each reel
     * @param {number} symbsBfResult amount of symbols before result
     */
    start (betResult, symbsBfResult = 6) {
        changeAnimRequireTo(true);

        for(let i = 0; i < this.allReels.length; i++ ){
            this.allReels[i].start(betResult[i], symbsBfResult+i, this.onReelStopped.bind(this));
        }

    }

    /**
     * when each reel finished spin, it reduces reelsCounter
     * when all reels are finished, reset the counter, and check bet lines
     */
    onReelStopped () {
        this.reelsCounter--;
        if (this.reelsCounter === 0) {
            this.reelsCounter = this.allReels.length;
            changeAnimRequireTo(false);
            spinButton.enable();
            if (this.winAnimRequired){
                this.fireEvent("notify:winSpinOver", this.winConfig);
                this.showWinAnimation()
            }
            this.winAnimRequired = false;
        }
    }

    setWinAnimation (config) {
        this.winAnimRequired = true;
        this.winConfig = config;
    }

    showWinAnimation() {
        for (let i = 0; i < this.winConfig.winSymbols.length; i++){
            let curLine = this.winConfig.winSymbols[i];

            for(let j = 0; j < curLine.length; j++){
                this.allReels[j].symbols[curLine[j]].playWinAnimation();
            }

        }
    }

    /**
     * check each bet line for win combination
     */
   /* checkBetLines (){

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
                    symbol.playWinAnimation();
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
            //I have used sprites for selector, starting from 1, that's why I have to add +1 here;
            let betMultiplier = betSelector.currentValue + 1;
            winScreen.showScreen(winPoints * betMultiplier);
            winPoints = 0;
        }
    }*/

    /**
     * clears current win lines before next spin
     */
    clearCurrentWinLines () {
        this.currentWinLines = [];
    }

    by (params) {
        if( !this.eventHandlers ){
            this.eventHandlers = {};
        }

        for( let eventName in params) {
            if( params.hasOwnProperty(eventName) ) {
                if ( !this.eventHandlers[eventName]){

                    events.addListener(eventName, this);
                }

                this.eventHandlers[eventName] = params[eventName] ;
            }
        }
    }

    fireEvent(eventName, ...args){
        events.fireEvent(eventName, args);
    }

}