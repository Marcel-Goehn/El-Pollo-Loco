class Background extends MoveableObject{
    constructor(x, height, width, path) {
        super();
        this.x = x;
        this.y = 480 - height;
        this.width = width;
        this.height = height;
        this.loadImage(path);
    }
}