import {Button} from "./button";
import {textures} from "./engine";



export class Selector extends PIXI.Container{
    constructor(x, y, leftSrc, rightSrc, possibleValues) {
        super();
        this.minusButton = new Button(0, 0, leftSrc, this.minusOne.bind(this));
        this.plusButton = new Button(200, 0, rightSrc, this.plusOne.bind(this));

        this.possibleValues = possibleValues;
        this.currentValue = 1;
        this.addNumber();

        this.addChild(this.minusButton, this.plusButton, this.number);

        this.position.set(x, y);
        app.stage.addChild(this);
    }

    minusOne() {
        this.number.texture = textures[this.possibleValues[ --this.currentValue ]];
        this.buttonDisableCheck()
    }

    plusOne () {
        this.number.texture = textures[this.possibleValues[ ++this.currentValue ]];
        this.buttonDisableCheck()
    }

    buttonDisableCheck(){
        if (this.currentValue >= this.possibleValues.length - 1){
            this.plusButton.disable();
        } else {
            this.plusButton.enable();
        }

        if (this.currentValue < 1){
            this.minusButton.disable();
        } else {
            this.minusButton.enable();
        }
    }

    addNumber () {
        this.number = new PIXI.Sprite(textures[this.possibleValues[this.currentValue]]);
        this.number.anchor.set(0.5);
        this.number.width = 125;
        this.number.height = 125;
        this.number.position.set(100, 0);
    }


}