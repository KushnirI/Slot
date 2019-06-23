import {textures, app, makeSpin, animationRequired, changeAnimRequireTo} from "./engine";

export class Button extends PIXI.Sprite{
    constructor(x, y, buttonTextures){
        super(textures[buttonTextures.idle]);

        this.idleTexture = buttonTextures.idle;
        this.hoverTexture = buttonTextures.hover;
        this.downTexture = buttonTextures.down;
        this.disabledTexture = buttonTextures.disabled;

        this.width = 100;
        this.height = 100;
        this.anchor.set(0.5);
        this.position.set(x, y);
        this.interactive = true;
        this.disabled = false;

        this.setHitArea(65);

        app.stage.addChild(this);
    }


    mouseover() {
        this.disabled ? this.texture = textures[this.disabledTexture] : this.texture = textures[this.hoverTexture];
    }

    mouseout() {
        this.disabled ? this.texture = textures[this.disabledTexture] : this.texture = textures[this.idleTexture];
    }

    mousedown() {
        if(!animationRequired &&  !this.disabled){
            this.texture = textures[this.downTexture];
            makeSpin(2);
        } else {
            this.disabled = true;
            this.texture = textures[this.disabledTexture];
            changeAnimRequireTo(false);
        }
    }

    mouseup() {
        this.disabled ? this.texture = textures[this.disabledTexture] : this.texture = textures[this.hoverTexture];
    }

    setHitArea (radius) {
        this.hitArea = new PIXI.Circle(0, 0, radius);
    }
}