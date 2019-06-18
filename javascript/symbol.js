import {textures, animationRequired,spinOverFiltration} from "./engine";

export class Symbol extends PIXI.Sprite{
    constructor(textureSrc, width){
        super(textures[textureSrc]);
        this.width = width;
        this.height = width;
        this.type = textureSrc;

        this.symbolsOnTop = 0;
        this.currentStep = 0;
        this.animationStep = 8;

    }

    spinAnimation() {

        if(this.symbolsOnTop > 0 && this.currentStep > 0) {
            if (this.currentStep < this.animationStep) {
                this.y += this.currentStep;
                this.currentStep = 0;
                this.symbolsOnTop--;
            } else{
                this.currentStep -= this.animationStep;
                this.y += this.animationStep;
            }


        } else if (this.symbolsOnTop > 0 && animationRequired){
            this.currentStep = this.width;
        } else{
            spinOverFiltration();
        }

    }



}