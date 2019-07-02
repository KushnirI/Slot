import {textures} from "./engine";
import {CustomTween} from "./customTween";

export class Symbol extends PIXI.Sprite{
    constructor(textureSrc, width, onComplete){
        super(textures[textureSrc]);

        this.width = width;
        this.height = width;
        this.type = textureSrc;

        this.speed = 400;
        this.onComplete = onComplete;

        this.twin = new CustomTween(this, "y", this.y, this.y + this.height, this.speed,  this.onComplete);

        this.isScaled = false;
    }

    makeSpin () {
        this.twin.play(this.y, this.y + this.height);
    }

    makeScale () {
        if(!this.isScaled){
            this.scale.set(1.2);
            this.isScaled = true;
           /* I've got issues with changing size, I would rather change alpha property
            for example 0.8 for start and 1 for win lines */
        }

    }

    removeScale() {
        if(this.isScaled){
            this.scale.set(1);
            this.isScaled = false;
        }
    }
}