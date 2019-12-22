import {Rectangle} from "./rectangle";

export class WinScreen extends PIXI.Container{
    constructor(x, y, width, height, color) {
        super();

        this.screen = new Rectangle(x, y, width, height, color);
        this.screen.alpha = 0.3;
        this.message = this.createMessage(x, y, width, height);

        this.addChild(this.screen, this.message);
        this.hideScreen();
        this.alpha = 0.5;
        this.currentWin = null;

        app.stage.addChild(this);
    }

    createMessage (x, y, width, height) {
        const message = new PIXI.Text("You won");
        message.style = {
            fontFamily: "Arial",
            fontSize: 36,
            fill: "white"
        };
        message.anchor.set(0.5);
        message.position.set(x + width/2, y + height/2);

        return message;
    }

    /**
     * @param {number} winAmount amount of win points
     */
    updateCurrentWin(winAmount){
        this.currentWin = winAmount;
    }

    /**
     * makes winScreen visible
     */
    showScreen (){
        this.visible = true;
        this.message.text = `You won ${this.currentWin} !!!`;
    }

    /**
     * hides winScreen
     */
    hideScreen () {
        this.visible = false;
    }
}