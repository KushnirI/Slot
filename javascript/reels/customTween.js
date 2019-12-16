import {renderLoop} from "../index";
import {timeBetweenFrames} from "../utils";

export class CustomTween {
    constructor(obj, propertyName, start, end, period) {

        this.obj = obj;
        this.start = start;
        this.end = end;
        this.propertyName = propertyName;
        this.getSpeed(period);

        renderLoop.push(this);
        this.updateRequired = false;
    }

    /**
     * on each frame evenly change required param, from the start point to the end, for a set period of time
     * @param {number} delta eliminates delays between frames
     */
    update(delta) {
        if (this.updateRequired) {
            if (this.distance > 0) {
                if (this.obj[this.propertyName] < this.end) {
                    this.obj[this.propertyName] += this.speed * delta;
                }

                if (this.obj[this.propertyName] >= this.end) {
                    this.obj[this.propertyName] = this.end;
                    this.updateRequired = false;

                    this.onComplete();
                }
            } else {
                if (this.obj[this.propertyName] > this.end) {
                    this.obj[this.propertyName] += this.speed * delta;
                }

                if (this.obj[this.propertyName] <= this.end) {
                    this.obj[this.propertyName] = this.end;
                    this.updateRequired = false;

                    this.onComplete();
                }
            }
        }
    }

    /**
     * generates speed depend on distance and period
     * @param {number} period period of time needed to reach the endpoint
     */
    getSpeed(period) {
        this.distance = this.end - this.start;
        this.numOfFrames = period / timeBetweenFrames;
        this.speed = this.distance / this.numOfFrames;
    }

    /**
     *
     * @param {number} start start point
     * @param {number} end end point
     * @param {number} period period of time needed to reach the endpoint
     * @param {function} onComplete callback function
     * @returns {Promise<any>}
     */
    play(start, end, period, onComplete) {
        return new Promise(resolve => {
            this.start = start;
            this.end = end;
            this.getSpeed(period);
            this.onComplete = () => {
                onComplete();
                resolve();
            };
            this.updateRequired = true;
        })
    }
}