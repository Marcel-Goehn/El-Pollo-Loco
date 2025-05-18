class MoveableObject {
    imageCache = {};
    otherDirection = false;

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
};