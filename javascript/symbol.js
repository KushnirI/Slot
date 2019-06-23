import {textures, animationRequired, spinOverFiltration} from "./engine";
import {EvenlyChangeValueBetween} from "./evenlyChangeValueBetween";

export class Symbol extends PIXI.Sprite{
    constructor(textureSrc, width){
        super(textures[textureSrc]);
        this.width = width;
        this.height = width;
        this.type = textureSrc;

        this.symbolsBeforeResult = 0;
        this.speed = 1000;

        this.twin = new EvenlyChangeValueBetween(this, this.speed, this.informParrent)

    }

    update(delta) {
        this.twin.update(delta);
    }

    informParrent() {
        // TODO: should inform reel that symbol is in the end position
        console.error("end position reached");
    }
}