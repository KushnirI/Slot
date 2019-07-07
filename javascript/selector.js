import {Button} from "./button";
import {textures} from "./engine";



export class Selector extends PIXI.Container{
    constructor(x, y, leftSrc, rightSrc, numbers) {
        super();
        this.minus = new Button(0, 0, leftSrc, this.minusOne.bind(this));
        this.plus = new Button(200, 0, rightSrc, this.plusOne.bind(this));

        this.numbers = numbers;
        this.currentValue = 1;
        this.sprite = new PIXI.Sprite(textures[this.numbers[this.currentValue]]);
        this.sprite.anchor.set(0.5);
        this.sprite.width = 125;
        this.sprite.height = 125;
        this.sprite.position.set(100, 0);

        this.addChild(this.minus, this.plus, this.sprite);

        this.position.set(x, y);
        app.stage.addChild(this);
    }

    minusOne() {
        this.sprite.texture = textures[this.numbers[ --this.currentValue ]];
        this.buttonDisableCheck()
    }

    plusOne () {
        this.sprite.texture = textures[this.numbers[ ++this.currentValue ]];
        this.buttonDisableCheck()
    }

    buttonDisableCheck(){
        if (this.currentValue + 1 >= this.numbers.length){
            this.plus.disable();
        } else {
            this.plus.enable();
        }

        if (this.currentValue - 1 < 0){
            this.minus.disable();
        } else {
            this.minus.enable();
        }
    }


}