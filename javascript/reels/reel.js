import {areReelsSpinning} from "../engine";
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

    }

    /**
     * adding symbols to reel by symbolsPoint from gameConfig
     * @param {array} symbolsPoint array with points for symbols
     * @returns {Array} array with symbols
     */
    addSymbols(symbolsPoint) {
        const symbols = [];

        for(let i = 0; i < symbolsPoint.length; i++) {
            const curSymb = symbolsPoint[i];

            const index = randomInt(0, possibleSymSrc.length - 1);
            const symbol = new Symbol(possibleSymSrc[index], this.positionConfig);
            symbol.position.set(curSymb.x , curSymb.y);
            this.addChild(symbol);
            symbols.push(symbol);
        }

        return symbols;
    }
    /**
     * start spinning symbols
     * @returns {Promise<any>} promise
     */
    start () {
        this.symbolsBeforeResult = Infinity;
        return Promise.all(this.symbols.map(sym => {
            return sym.startSpin();
        }))
            .then(() => this.doSpin());

    }

    startStopSequence(betResult, symbsBfResult) {
        return new Promise( resolve => {
            this.symbolsBeforeResult = symbsBfResult;
            this.resultSymbols = betResult;
            this.curResultSymbIndex = this.resultSymbols.length - 1;
            this.serverDataReceived = true;

            this.resolveChain = resolve
        })

    }


    doSpin(useRandomSymb = true) {
        this.moveOneSlot(useRandomSymb)
            .then(() => {
                this.symbolsBeforeResult--;

                if (this.symbolsBeforeResult > 0 && areReelsSpinning || !this.serverDataReceived) {
                    this.doSpin();

                } else if(this.curResultSymbIndex >= 0) {
                    this.doSpin(false);
                    this.curResultSymbIndex--;
                }else {
                    Promise.all(this.symbols.map( symbol => {
                        return symbol.endSpin();
                    }))
                        .then(() => this.onSpinOver())
                }
            })
    }

    /**
     *
     * @param {boolean} useRandomSymb if true add randomSymbol
     * @returns {Promise<any>} promise
     */
    moveOneSlot(useRandomSymb){
        const lastIndex = this.symbols.length - 1;
        const lastSymbol = this.symbols[lastIndex];
        let newIndex;

        if(useRandomSymb){
            newIndex = randomInt(0, possibleSymSrc.length - 1);
        } else {
            newIndex = this.resultSymbols[this.curResultSymbIndex];
        }

        lastSymbol.setNewSymbol(newIndex);

        lastSymbol.y = -this.positionConfig.slotLength;

        this.symbols.unshift(this.symbols.pop());

        return Promise.all(this.symbols.map( symbol => {
            return symbol.moveOneSlot();
        }))
    }

    /**
     * When current spin is over set default values and call callback function
     */
    onSpinOver() {
        this.serverDataReceived = false;
        this.resultSymbols = [];
        this.resolveChain();
    }

    showWinSymb (symbols) {
        for(let i = 0; i < symbols.length; i++){

            if(symbols[i]){
                this.symbols[i].playWinAnimation()
            } else {
                this.symbols[i].playLossAnimation()
            }
        }
    }

    playIdle() {
        this.symbols.forEach( symbol => {
            symbol.playIdle();
        })
    }
}