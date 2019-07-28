export class Rectangle extends PIXI.Graphics {
    constructor(x, y, width, height, color) {
        super();

        this.lineStyle(1, 0x000000, 1);
        this.beginFill(color);
        this.drawRect(0, 0, width, height);
        this.endFill();
        this.position.set(x, y);
    }
}