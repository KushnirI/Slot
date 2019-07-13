import {textures} from "./engine";
import {CustomTween} from "./customTween";

export class Symbol extends PIXI.Sprite{
    constructor(textureSrc, width){
        super(textures[textureSrc]);

        this.width = width;
        this.height = width;
        this.type = textureSrc;
        this.anchor.set(0.5);

        this.speed = 160;

        this.tween = new CustomTween(this, "y", this.y, this.y + this.height, this.speed);
        this.bounceTween = new CustomTween(this, "y", this.y, this.y - this.height/2, this.speed*2/3);

        this.widthTween = new CustomTween(this, "width", this.width, this.width + 25, this.speed*3);
        this.heightTween = new CustomTween(this, "height", this.height, this.height + 25, this.speed*3);
    }

    /**
     *
     * @param {function} callback callback function called when bounceTweens are finished
     */
    startSpin(callback) {
        this.removeWinAnimation();
        this.startCallback = callback;
        this.bounceTween.play(this.y, this.y - this.height/2,this.speed*3/4, this.bounceDown.bind(this));
    }

    /**
     * return symbol to start position after upBounce
     */
    bounceDown () {
        this.bounceTween.play(this.y, this.y + this.height/2,this.speed*2/3, this.startCallback);
    }

    /**
     * sets default symbols params before next spin
     * evenly change position by one slot using tween
     * @param {function} onComplete callback function called when tween is finished
     */
    moveOneSlot (onComplete) {
        this.tween.play(this.y, this.y + this.height, this.speed, onComplete);
    }

    endSpin(callback) {
        this.endCallback = callback;
        this.bounceTween.play(this.y, this.y + this.height/2,this.speed*2/3, this.bounceUp.bind(this));
    }

    /**
     * return symbol to start position after downBounce
     */
    bounceUp () {
        this.bounceTween.play(this.y, this.y - this.height/2,this.speed*2/3, this.endCallback);
    }

    /**
     * animation for win symbols
     */
    playWinAnimation () {
        this.scaleUp()
    }

    scaleUp () {
        this.widthTween.play(this.width, this.width+25, this.speed*3, this.scaleDown.bind(this));
        this.heightTween.play(this.height, this.height+25, this.speed*3, this.stub.bind(this));
    }

    scaleDown () {
        this.widthTween.play(this.width, this.width-25, this.speed*3, this.stub.bind(this));
        this.heightTween.play(this.height, this.height-25, this.speed*3, this.stub.bind(this));
    }

    /**
     * sets default symbols params
     */
    removeWinAnimation() {
            this.scale.set(1.0417);
    }

    stub () {
        //stub
    }
}