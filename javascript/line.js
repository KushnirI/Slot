export class Line extends PIXI.Graphics {
    constructor (startX, startY, endX, endY) {
        super();
        this.lineStyle(3, 0x808080, 0.5);
        this.moveTo(startX, startY);
        this.lineTo(endX, endY);
    }

}