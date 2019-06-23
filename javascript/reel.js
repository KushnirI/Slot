import {gameSize, possibleSymSrc, renderLoop, changeAnimRequireTo, textures} from "./engine";
import {randomInt} from "./utils";
import {Symbol} from "./symbol";

export class Reel extends PIXI.Container{
    constructor(x, y, symbolsNum) {
        super();

        this.position.set(x, y);
        this.step = gameSize.height/symbolsNum;
        this.symbols = [];

        this.addSymbols(symbolsNum + 1);

        renderLoop.push(this);
    }

    addSymbols(symbolsNum) {
        for(let i = 0; i < symbolsNum; i++) {

            let index = randomInt(0, possibleSymSrc.length - 1);
            let symbol = new Symbol(possibleSymSrc[index], this.step);
            symbol.position.set(0, this.step * i);
            this.addChild(symbol);
            this.symbols.push(symbol);
        }
    }

    spin(symbNum){
        let lastIndex = this.symbols.length - 1;
        let lastSymbol = this.symbols[lastIndex];
        let index = randomInt(0, possibleSymSrc.length - 1);
        // debugger;
        lastSymbol.texture = textures[possibleSymSrc[index]];
        lastSymbol.position.set(0, -lastSymbol.height);

        this.symbols.unshift(this.symbols.pop());

        changeAnimRequireTo(true);

        this.symbols.forEach((symbol) => {
            symbol.symbolsBeforeResult = symbNum;
            symbol.twin.makeSpin();
        })
    }


    update(delta) {
        this.symbols.forEach((symbol) => {
            symbol.update(delta);
        })
    }
}