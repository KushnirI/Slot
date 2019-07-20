export class Line extends PIXI.Graphics {
    constructor ( arrConfig ) {
        super();
        this.lineStyle(3, 0x00ff00, 0.5);

        this.createLineByPints(arrConfig);
        this.hideWinLine();
    }

    /**
     * creates line using x,y points from array
     * @param {array} arrConfig array with x,y points
     */
    createLineByPints(arrConfig) {
        this.moveTo(arrConfig[0].x, arrConfig[0].y);

        for(let i = 1; i < arrConfig.length; i++){
            let curPointConfig = arrConfig[i];
            this.lineTo(curPointConfig.x, curPointConfig.y);
        }
    }

    /**
     * makes line visible
     */
    showWinLine() {
        this.visible = true;
    }

    /**
     * hides line
     */
    hideWinLine () {
        this.visible = false;
    }
}