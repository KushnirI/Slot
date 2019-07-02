import {gameSize, possibleSymSrc, renderLoop, textures, animationRequired, changeAnimRequireTo, button} from "./engine";
import {randomInt} from "./utils";
import {Symbol} from "./symbol";

export class Reel extends PIXI.Container{
    constructor(x, y, symbolsNum, onComplete) {
        super();

        this.position.set(x, y);
        this.step = gameSize.height/symbolsNum;
        this.symbols = [];

        this.addSymbols(symbolsNum + 1);

        renderLoop.push(this);
        this.symbolsBeforeResult = 5;

        this.symbolsCounter = 0;
        this.onComplete = onComplete
    }

    /**
     *
     * @param {number} symbolsNum required amount on symbols
     */
    addSymbols(symbolsNum) {
        for(let i = 0; i < symbolsNum; i++) {

            let index = randomInt(0, possibleSymSrc.length - 1);
            let symbol = new Symbol(possibleSymSrc[index], this.step, this.countIncrement.bind(this));
            symbol.position.set(0, this.step * i);
            this.addChild(symbol);
            this.symbols.push(symbol);
        }
    }

    spin(){
        let lastIndex = this.symbols.length - 1;
        let lastSymbol = this.symbols[lastIndex];
        let index = randomInt(0, possibleSymSrc.length - 1);

        lastSymbol.texture = textures[possibleSymSrc[index]];
        lastSymbol.type = possibleSymSrc[index];
        lastSymbol.position.set(0, -lastSymbol.height);

        this.symbols.unshift(this.symbols.pop());

        this.symbols.forEach((symbol) => {
            symbol.makeSpin();
        })
    }


    update() {

        if (this.symbolsCounter === this.symbols.length){
            this.symbolsCounter = 0;
            this.symbolsBeforeResult--;
            if (this.symbolsBeforeResult > 0 && animationRequired) {
                this.spin();
            } else {
                this.onSpinOver();
            }
        }
    }

    countIncrement() {
        this.symbolsCounter++;
    }

    onSpinOver() {
        changeAnimRequireTo(false);
        button.disabled = false;
        this.onComplete();
    }

}