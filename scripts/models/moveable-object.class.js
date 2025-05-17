class MoveableObject {
    imageCache = {};

    constructor(x, y, height, width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    };

    
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    };


    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    };


    animateWalking(imgArr) {
        setInterval(() => {
            let i = this.currentImage % imgArr.length;
            let path = imgArr[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    };


    moveRight() {
        
    };


    moveLeft(speed) {
        setInterval(() => {
            this.x -= speed;
        }, 1000 / 60);
    };
};