class MoveableObject {
    imageCache = {};
    otherDirection = false;
    speedY = 0;
    acceleration = 0.25;

    constructor(x, y, height, width, speed) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.speed = speed;
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


    playAnimation(imgArr) {
        let i = this.currentImage % imgArr.length;
        let path = imgArr[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    chickensAndCloudsMovingLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    };


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            };
        }, 1000 / 60);
    };


    isAboveGround() {
        return this.y < 100;
    }
};
