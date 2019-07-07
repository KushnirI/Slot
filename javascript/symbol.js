import {textures} from "./engine";
import {CustomTween} from "./customTween";

export class Symbol extends PIXI.Sprite{
    constructor(textureSrc, width){
        super(textures[textureSrc]);

        this.width = width;
        this.height = width;
        this.type = textureSrc;

        this.speed = 400;
        this.alpha = 0.7;

        this.twin = new CustomTween(this, "y", this.y, this.y + this.height, this.speed);
    }

    /**
     * sets default symbols params before next spin
     * evenly change position by one slot using twin
     * @param {function} onComplete callback function called when tween is finished
     */
    moveOneSlot (onComplete) {
        this.removeWinAnimation();
        this.twin.play(this.y, this.y + this.height, onComplete);
    }

    /**
     * animation for win symbols
     */
    winAnimation () {
        this.scale.set(1.15);
        this.alpha = 1;
    }

    /**
     * sets default symbols params
     */
    removeWinAnimation() {
            this.scale.set(1.0418);
            this.alpha = 0.7;
    }
}