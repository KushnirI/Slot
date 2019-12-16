import {Button} from "./UI/button";
import {textures} from "./index";
import {observableMixin} from "./main/observableMixin";

export class Selector extends PIXI.Container{
    constructor(x, y, leftSrc, rightSrc, possibleValues) {
        super();

        Object.assign(this, observableMixin);
        this.minusButton = new Button(0, 0, leftSrc, this.minusOne.bind(this));
        this.plusButton = new Button(200, 0, rightSrc, this.plusOne.bind(this));

        this.possibleValues = possibleValues;
        this.currentValue = 1;
        this.number = this.addNumber();

        this.addChild(this.minusButton, this.plusButton, this.number);
        this.position.set(x, y);
        app.stage.addChild(this);

        this.by({
            "stateChangedTo:Spin": this.disableButtons,
            "stateCompleted:Spin": this.buttonDisableCheck
        })
    }

    minusOne() {
        this.number.texture = textures[this.possibleValues[ --this.currentValue ]];
        this.buttonDisableCheck();
        this.fireEvent("betChanged");
    }

    plusOne () {
        this.number.texture = textures[this.possibleValues[ ++this.currentValue ]];
        this.buttonDisableCheck();
        this.fireEvent("betChanged");
    }

    /**
     * disable/enable buttons depend on currentValue
     */
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

    /**
     * creates selector number sprite
     * @returns {PIXI.Sprite} texture of selector number
     */
    addNumber () {
        const number = new PIXI.Sprite(textures[this.possibleValues[this.currentValue]]);
        number.anchor.set(0.5);
        number.width = 125;
        number.height = 125;
        number.position.set(100, 0);

        return number
    }

    /**
     * disable buttons
     */
    disableButtons() {
        this.plusButton.disable();
        this.minusButton.disable();
    }

    /**
     * return current bet size
     * @returns {number} this.currentValue is position in array and 0 equals 1 bet size
     */
    getCurBetSize() {
        return this.currentValue + 1;
    }
}