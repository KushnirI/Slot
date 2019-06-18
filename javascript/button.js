import {textures, app, makeSpin, animationRequired, changeAnimRequireTo} from "./engine";

export class Button extends PIXI.Sprite{
    constructor(){
        super(textures["button_idle.png"]);
        this.width = 100;
        this.height = 100;
        this.anchor.set(0.5);
        this.position.set(400, 450);
        this.interactive = true;
        this.disabled = false;

        this.hitArea = new PIXI.Circle(0, 0, 60);

        app.stage.addChild(this);

    }


    mouseover() {
        if(this.disabled){
            this.texture = textures["button_disabled.png"];
        } else {
            this.texture = textures["button_hover.png"];
        }
    }

    mouseout() {
        if(this.disabled){
            this.texture = textures["button_disabled.png"];
        } else {
            this.texture = textures["button_idle.png"];
        }

    }

    mousedown() {
        if(!animationRequired &&  !this.disabled){
            this.texture = textures["button_down.png"];
            makeSpin(8);
        } else {
            this.disabled = true;
            this.texture = textures["button_disabled.png"];
            changeAnimRequireTo(false);

        }

    }

    mouseup() {
        if(this.disabled){
            this.texture = textures["button_disabled.png"];
        } else {
            this.texture = textures["button_hover.png"];
        }

    }

}