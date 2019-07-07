import {Rectangle} from "./rectangle";

export class WinScreen extends PIXI.Graphics{
    constructor(x, y, width, height, color) {
        super();

        this.screen = new Rectangle(x, y, width, height, color);
        this.message = new PIXI.Text("You won");
        this.message.style = {
            fontFamily: "Arial",
            fontSize: 36,
            fill: "white"
        };
        this.message.position.set(width/2 - 130, height/2 - 36 );

        this.addChild(this.screen, this.message);
        this.visible = false;
        this.alpha = 0.6;

        app.stage.addChild(this)
    }

    /**
     * makes winScreen visible
     * @param {number} winAmount - amount of win points
     */
    showScreen (winAmount){
        let winMsg = "You won " + winAmount + " !!!!!";
        this.visible = true;
        this.message.text = winMsg;
    }

    /**
     * hides winScreen
     */
    hideScreen () {
        this.visible = false;
    }

}