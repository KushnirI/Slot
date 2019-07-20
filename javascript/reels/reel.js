import {animationRequired} from "../engine";
import {randomInt} from "../utils";
import {Symbol} from "./symbol";
import {gameConfig} from "../main/gameConfig";

export class Reel extends PIXI.Container{
    constructor(x, y) {
        super();

        this.positionConfig = gameConfig.reelsPosition.reels;
        this.symbolsPoint = gameConfig.reelsPosition.symbolsPoint;

        this.position.set(x, y);

        this.symbols = this.addSymbols(this.symbolsPoint);

        this.symbolsBeforeResult = 0;
        this.resultSymbols = [];
        this.curResultSymbIndex = null;
        this.serverDataReceived = false;

        this.symbolsCounter = this.symbols.length;
    }

    /**
     * adding symbols to reel by symbolsPoint from gameConfig
     * @param {array} symbolsPoint array with points for symbols
     * @returns {Array} array with symbols
     */
    addSymbols(symbolsPoint) {
        let symbols = [];

        for(let i = 0; i < symbolsPoint.length; i++) {
            let curSymb = symbolsPoint[i];

            let index = randomInt(0, possibleSymSrc.length - 1);
            let symbol = new Symbol(possibleSymSrc[index], this.positionConfig);
            symbol.position.set(curSymb.x , curSymb.y);
            this.addChild(symbol);
            symbols.push(symbol);
        }

        return symbols;
    }
    /**
     * start spinning symbols
     * @param {function} onComplete callback function, which called when all iterations are finished
     */
    start (onComplete) {
        this.symbolsBeforeResult = Infinity;
        this.onComplete = onComplete;

        this.symbols.forEach((symbol) => {
            symbol.startSpin( this.onStartBounceFinished.bind(this) );
        })
    }

    /**
     *
     * @param {array} betResult array with result for current bet
     * @param {number} symbsBfResult amount of iteration before result
     */
    addServerValues (betResult, symbsBfResult) {
        this.symbolsBeforeResult = symbsBfResult;
        this.resultSymbols = betResult;
        this.curResultSymbIndex = this.resultSymbols.length - 1;
        this.serverDataReceived = true;
    }

    /**
     *
     * @param {boolean} useRandomSymb if true add randomSymbol
     */
    moveLastSymbOnTop(useRandomSymb = true){
        let lastIndex = this.symbols.length - 1;
        let lastSymbol = this.symbols[lastIndex];
        let newIndex;

        if(useRandomSymb){
            newIndex = randomInt(0, possibleSymSrc.length - 1);
        } else {
            newIndex = this.resultSymbols[this.curResultSymbIndex];
        }

        lastSymbol.setNewSymbol(newIndex);

        lastSymbol.y = -this.positionConfig.slotLength;

        this.symbols.unshift(this.symbols.pop());

        this.symbols.forEach((symbol) => {
            symbol.moveOneSlot( this.onSymbolMovedOneSlot.bind(this) );
        })
    }

    /**
     * when all symbols are finished start bounce, reset the symbolsCounter
     * and call moveLastSymbOnTop
     */
    onStartBounceFinished () {
        this.symbolsCounter--;
        if (this.symbolsCounter === 0){
            this.symbolsCounter = this.symbols.length;
            this.moveLastSymbOnTop();
        }
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

            if (this.symbolsBeforeResult > 0 && animationRequired || !this.serverDataReceived) {
                this.moveLastSymbOnTop();

            } else if(this.curResultSymbIndex >= 0) {
                this.moveLastSymbOnTop(false);
                this.curResultSymbIndex--;
            }else {
                this.symbols.forEach((symbol) => {
                    symbol.endSpin( this.onEndBounceFinished.bind(this) );
                });

            }
        }
    }

    /**
     * when all symbols are finished end bounce, reset the symbolsCounter
     * and call onSpinOver
     */
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
        this.serverDataReceived = false;
        this.resultSymbols = [];
        this.onComplete();
    }

}