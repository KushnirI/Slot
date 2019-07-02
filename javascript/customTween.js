import {renderLoop} from "./engine";
import {timeBetweenFrames} from "./utils";

export class CustomTween {
    constructor(obj, propertyName, start, end, period, onComplete){

        this.obj = obj;
        this.start = start;
        this.end = end;
        this.propertyName = propertyName;

        this.distance = this.end - this.start;
        this.numOfFrames = period/timeBetweenFrames;

        this.speed = this.distance/this.numOfFrames;
        renderLoop.push(this);
        this.updateRequired = false;
        this.onComplete = onComplete;
    }

    update (delta){
        if(this.updateRequired){
            if (this.obj[this.propertyName] < this.end){
                this.obj[this.propertyName] += this.speed * delta;
            }
            if (this.obj[this.propertyName] >= this.end) {
                this.obj[this.propertyName] = this.end;
                this.updateRequired = false;
                this.onComplete();

            }
        }
    }

    /**
     *
     * @param {number} start start point
     * @param {number} end end point
     */
    play(start, end) {
        this.start = start;
        this.end = end;
        this.updateRequired = true;
    }

}