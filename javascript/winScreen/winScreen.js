export class WinScreen extends PIXI.Graphics{
    constructor(x, y, width, height) {
        super();

        Object.assign(this, observableMixin);
        this.message = new PIXI.Text("You won");
        this.message.style = {
            fontFamily: "Arial",
            fontSize: 36,
            fill: "white"
        };
        this.message.position.set(width/2 - 130, height/2 - 36 );

        this.addChild(this.message);
        this.hideScreen();
        this.alpha = 0.7;

        this.by({
            "notify:spinStart" : this.hideScreen,
            "notify:spinOver" : this.showScreen,
            "notify:betChanged" : this.hideScreen
        });

        app.stage.addChild(this)
    }

    /**
     * makes winScreen visible
     * @param {object} config server's result config
     * @param {number} config.winAmount amount of win points
     */
    showScreen (config){
        if(config) {
            let winMsg = "You won " + config.winAmount + " !!!!!";
            this.visible = true;
            this.message.text = winMsg;
        }
    }

    /**
     * hides winScreen
     */
    hideScreen () {
        this.visible = false;
    }

}