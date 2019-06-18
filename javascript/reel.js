import {gameSize, gameArea, possibleSymSrc, randomInt, renderLoop, changeAnimRequireTo} from "./engine";
import {Symbol} from "./symbol";

export class Reel extends PIXI.Container{
    constructor(x, y, symbolsNum) {
        super();

        this.position.set(x, y);
        this.step = gameSize.height/symbolsNum;
        this.symbolsArr = [];

        this.addSymbols(symbolsNum);

        renderLoop.push(this);
        gameArea.addChild(this);
    }

    addSymbols(symbolsNum, top = 0) {
        for(let i = 0; i < symbolsNum; i++) {

            let index = randomInt(0, possibleSymSrc.length - 1);
            let symbol = new Symbol(possibleSymSrc[index], this.step);
            symbol.position.set(0, this.step * i + top *(-this.step));
            this.addChild(symbol);
            this.symbolsArr.push(symbol);

        }

    }

    spin(symbNum){
        this.addSymbols(symbNum, symbNum);
        changeAnimRequireTo(true);

        this.symbolsArr.forEach((symbol) => {
            symbol.symbolsOnTop = symbNum;
            symbol.currentStep = this.step;
        })
    }

    removeUseless() {
        this.symbolsArr.forEach((symbol) => {
            if(symbol.y < -5){
                symbol.visible = false;
            }

            if (symbol.y > gameSize.height -1){
                symbol.visible = false;
            }
        });

        this.symbolsArr = this.symbolsArr.filter( (symbol) => symbol.visible);
    }



    update() {
        this.symbolsArr.forEach((symbol) => {
            symbol.spinAnimation();
        })
    }
}