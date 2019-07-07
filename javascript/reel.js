import {textures, animationRequired, changeAnimRequireTo, button} from "./engine";
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

        this.symbolsCounter = 0;
    }

    /**
     * adding symbols to reel on constructor creation
     * @param {number} symbolsNum required amount on symbols
     */
    addSymbols(symbolsNum) {
        for(let i = 0; i < symbolsNum; i++) {

            let index = randomInt(0, possibleSymSrc.length - 1);
            let symbol = new Symbol(possibleSymSrc[index], this.step);
            symbol.y = this.step * i;
            this.addChild(symbol);
            this.symbols.push(symbol);
        }
    }

    /**
     * reset and change position of the last symbol, hidden by reels mask, on top of visible zone
     * @param {number} symbsBfResult amount of iteration before result
     * @param {function} onComplete callback function, which called when all iterations are finished
     */
    moveLastSymbOnTop(symbsBfResult, onComplete){
        this.symbolsBeforeResult = symbsBfResult;
        this.onComplete = onComplete;

        let lastIndex = this.symbols.length - 1;
        let lastSymbol = this.symbols[lastIndex];
        let index = randomInt(0, possibleSymSrc.length - 1);

        lastSymbol.texture = textures[possibleSymSrc[index]];
        lastSymbol.type = possibleSymSrc[index];
        lastSymbol.position.set(0, -lastSymbol.height);

        this.symbols.unshift(this.symbols.pop());

        this.symbols.forEach((symbol) => {
            symbol.moveOneSlot( this.onSymbolMovedOneSlot.bind(this) );
        })
    }

    /**
     * when each symbol moved one slot, it reduces counter
     * when all symbols are finished, reset the counter
     * if more iterations are required, call this.moveLastSymbOnTop
     */
    onSymbolMovedOneSlot() {
        this.symbolsCounter--;
        if (this.symbolsCounter <= 0){
            this.symbolsCounter = this.symbols.length;
            this.symbolsBeforeResult--;

            if (this.symbolsBeforeResult > 0 && animationRequired) {
                this.moveLastSymbOnTop(this.symbolsBeforeResult, this.onComplete);
            } else {
                this.onSpinOver();
            }
        }
    }

    /**
     * When current spin is over enable the spinButton and call callback function
     */
    onSpinOver() {
        changeAnimRequireTo(false);
        button.enable();
        this.onComplete();
    }

}