import {textures} from "../engine";
import {CustomTween} from "./customTween";
import {betLines} from "../engine";

export class Symbol extends PIXI.Sprite{
    constructor(textureSrc, config){
        super(textures[textureSrc]);

        this.width = config.symbolDimensions.width;
        this.height = config.symbolDimensions.height;
        this.slotLength = config.slotLength;

        this.type = textureSrc;
        this.anchor.set(0.5);

        this.speed = config.symbolSpeed;

        this.startScale = this.scale._x;
        this.endScale = this.startScale*1.25;

        this.tween = new CustomTween(this, "y", this.y, this.y +  this.slotLength, this.speed);
        this.bounceTween = new CustomTween(this, "y", this.y, this.y - this.height/2, this.speed*2/3);

        this.scaleTween = new CustomTween(this, "symbScale", this.startScale,  this.endScale, this.speed*3);

    }

    /**
     * sets default symbols params before next spin and makes up/down bounce using tween
     * @returns {Promise<any>} promise
     */
    startSpin () {
        return new Promise( resolve => {
            this.playIdle();
            this.bounceTween.play(this.y, this.y - this.height/2,this.speed*3/4, () => {})
                .then(() => this.bounceTween.play(this.y, this.y + this.height/2,this.speed*2/3, resolve))

        })
    }


    /**
     * evenly change position by one slot using tween
     * @returns {Promise<any>} promise
     */
    moveOneSlot () {
        return new Promise( resolve => {
            this.tween.play(this.y, this.y + this.slotLength, this.speed, resolve);
        });
    }

    /**
     * makes down/up bounce using tween
     * @returns {Promise<any>} promise
     */
    endSpin() {
        return new Promise( resolve => {
            this.bounceTween.play(this.y, this.y + this.height/2,this.speed*2/3, () => {})
                .then( () => {
                    this.bounceTween.play(this.y, this.y - this.height/2,this.speed*2/3, resolve);
                })
        })

    }

    /**
     * set symbol new texture and type
     * @param {number} index texture index of new symbol
     */
    setNewSymbol(index){
        this.texture = textures[possibleSymSrc[index]];
        this.type = possibleSymSrc[index];
    }

    /**
     *
     * @returns {number} number of symbol's scale property
     */
    get symbScale () {
        return this.scale._x;
    }

    /**
     *
     * @param {number} value set symbol's scale property
     */
    set symbScale (value) {
        this.scale.set(value);
    }

    /**
     * animation for win symbols
     */
    playWinAnimation () {
        this.scaleUp()
    }

    /**
     * evenly scales symbol up using tween
     */
    scaleUp () {
        this.scaleTween.play(this.startScale, this.endScale, this.speed*3, this.scaleDown.bind(this));
    }

    /**
     * evenly scales symbol down using tween
     */
    scaleDown () {
        this.scaleTween.play(this.endScale, this.startScale, this.speed*3, () => {});
    }

    /**
     * saves current parent params to be able to restore it later
     * and change parent to betLines to change the layer
     */
    playLossAnimation() {

        this.parentReel = this.parent;
        const globalX = this.getGlobalPosition().x;
        const globalY = this.getGlobalPosition().y;
        this.localX = this.x;
        this.localY = this.y;

        this.alpha = 0.5;

        betLines.addChildAt(this, 0);
        this.position.set(globalX, globalY);
    }
    /**
     * sets default symbols params and return parent to reel if it was changed
     */
    playIdle () {
        this.scale.set(this.startScale);
        this.alpha = 1;

        if(this.parentReel){
            this.parentReel.addChild(this);
            this.position.set(this.localX, this.localY);
        }
        this.parentReel = null;
    }

}