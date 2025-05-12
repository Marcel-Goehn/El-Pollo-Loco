class MoveableObject {
    constructor(x, y, height, width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

    
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    moveRight() {

    }


    moveLeft() {

    };
}