import {textures, animationRequired} from "./engine";
import {randomInt} from "./utils";
import {Symbol} from "./symbol";

export class Reel extends PIXI.Container{
    constructor(x, y, visibleSymbolsNum) {
        super();

        this.position.set(x, y);
        this.step = gameSize.height/visibleSymbolsNum;
        this.symbols = [];

        //one more symbol which will be covered by reels mask is required to make animation
        this.addSymbols(visibleSymbolsNum + 1);

        this.symbolsBeforeResult = 0;
        this.resultSymbols = [0,0,0];
        this.currentResultSymb = 2;

        this.symbolsCounter = this.symbols.length;
    }

    /**
     * adding symbols to reel on constructor creation
     * @param {number} symbolsNum required amount on symbols
     */
    addSymbols(symbolsNum) {
        for(let i = 0; i < symbolsNum; i++) {

            let index = randomInt(0, possibleSymSrc.length - 1);
            let symbol = new Symbol(possibleSymSrc[index], this.step);
            symbol.position.set(this.step/2 ,this.step * i + this.step/2);
            this.addChild(symbol);
            this.symbols.push(symbol);
        }
    }
    /**
     * @param {array} betResult array with result for current bet
     * @param {number} symbsBfResult amount of iteration before result
     * @param {function} onComplete callback function, which called when all iterations are finished
     */
    start (betResult,symbsBfResult, onComplete) {
        this.resultSymbols = betResult;
        this.symbolsBeforeResult = symbsBfResult;
        this.onComplete = onComplete;
        // this.moveLastSymbOnTop();
        this.symbols.forEach((symbol) => {
            symbol.startSpin( this.onStartBounceFinished.bind(this) );
        })
    }

    /**
     *
     * @param {boolean} randomSymb if true add randomSymbol
     */
    moveLastSymbOnTop(randomSymb = true){
        let lastIndex = this.symbols.length - 1;
        let lastSymbol = this.symbols[lastIndex];

        if(randomSymb){
            this.randResetSymbValue(lastSymbol);
        } else {
            this.setSymbResultValue(lastSymbol);
        }

        lastSymbol.position.set(this.step/2, -lastSymbol.height + this.step/2);

        this.symbols.unshift(this.symbols.pop());

        this.symbols.forEach((symbol) => {
            symbol.moveOneSlot( this.onSymbolMovedOneSlot.bind(this) );
        })
    }

    /**
     * randomly reset symbol's texture and type
     * @param {object} symb symbol object
     */
    randResetSymbValue(symb) {
        let index = randomInt(0, possibleSymSrc.length - 1);
        symb.texture = textures[possibleSymSrc[index]];
        symb.type = possibleSymSrc[index];
    }

    setSymbResultValue(symb) {
        let index = this.resultSymbols[this.currentResultSymb];
        symb.texture = textures[possibleSymSrc[index]];
        symb.type = possibleSymSrc[index];
        this.currentResultSymb--;
    }

    /**
     * when each symbol moved one slot, it reduces symbolsCounter
     * when all symbols are finished, reset the counter
     * if more iterations are required, call this.moveLastSymbOnTop
     */
    onSymbolMovedOneSlot() {
        this.symbolsCounter--;
        if (this.symbolsCounter === 0){
            this.symbolsCounter = this.symbols.length;
            this.symbolsBeforeResult--;

            if (this.symbolsBeforeResult > 0 && animationRequired) {
                this.moveLastSymbOnTop();

            } else if(this.currentResultSymb >= 0) {
                this.moveLastSymbOnTop(false);
            }else {
                this.symbols.forEach((symbol) => {
                    symbol.endSpin( this.onEndBounceFinished.bind(this) );
                });

            }
        }
    }

    onStartBounceFinished () {
        this.symbolsCounter--;
        if (this.symbolsCounter === 0){
            this.symbolsCounter = this.symbols.length;
            this.moveLastSymbOnTop();
        }
    }

    onEndBounceFinished () {
        this.symbolsCounter--;
        if (this.symbolsCounter === 0){
            this.symbolsCounter = this.symbols.length;
            this.onSpinOver();
        }
    }

    /**
     * When current spin is over set default values and call callback function
     */
    onSpinOver() {
        this.currentResultSymb = 2;
        this.resultSymbols = [];
        this.onComplete();
    }

}