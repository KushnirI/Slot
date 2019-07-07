import {renderLoop} from "./engine";
import {timeBetweenFrames} from "./utils";

export class CustomTween {
    constructor(obj, propertyName, start, end, period){

        this.obj = obj;
        this.start = start;
        this.end = end;
        this.propertyName = propertyName;

        this.distance = this.end - this.start;
        this.numOfFrames = period/timeBetweenFrames;

        this.speed = this.distance/this.numOfFrames;
        renderLoop.push(this);
        this.updateRequired = false;
    }

    /**
     * on each frame evenly change required param, from the start point to the end, for a set period of time
     * @param {number} delta eliminates delays between frames
     */
    update (delta){
        if(this.updateRequired){
            if (this.obj[this.propertyName] < this.end){
                this.obj[this.propertyName] += this.speed * delta;
            }
            if (this.obj[this.propertyName] >= this.end) {
                this.obj[this.propertyName] = this.end;
                this.updateRequired = false;
                // renderLoop.splice(renderLoop.indexOf(this), 1);
                this.onComplete();

            }
        }
    }

    /**
     *
     * @param {number} start start point
     * @param {number} end end point
     * @param {function} onComplete callback function
     */
    play(start, end, onComplete) {
        this.start = start;
        this.end = end;
        // renderLoop.push(this);
        this.onComplete = onComplete;
        this.updateRequired = true;
    }

}