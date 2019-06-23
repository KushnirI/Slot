import {renderLoop, spinOverFiltration, animationRequired} from "./engine";

export class EvenlyChangeValueBetween {
    constructor(obj, period, onComplete){

        this.obj = obj;

        this.end = this.obj.y + this.obj.height;

        this.distance = this.end - this.obj.y;
        this.timeBetweenFrames = 1000/60;
        this.numOfFrames = period/this.timeBetweenFrames;

        this.speed = this.distance/this.numOfFrames;
        renderLoop.push(this);
        this.updateRequired = false;
        this.callBack = onComplete;
    }

    update (delta){
        if(this.updateRequired){
            if (this.obj.y < this.end){
                this.obj.y += this.speed * delta;
            }
            if (this.obj.y >= this.end) {
                this.obj.y = this.end;
                this.updateRequired = false;
                this.callBack();
                this.obj.symbolsBeforeResult--;

                if (this.obj.symbolsBeforeResult > 0 && animationRequired){
                    // TODO: should be done on reel level
                    this.makeSpin()
                } else {
                    spinOverFiltration();
                }

            }
        }
    }

    makeSpin() {
        this.end = this.obj.y + this.obj.height;
        this.updateRequired = true;
    }

}