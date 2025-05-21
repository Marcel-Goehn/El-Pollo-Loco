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


    moveLeft() {
        this.x -= this.speed;
    }


    moveRight() {
        this.x += this.speed;
    }


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
    };


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };


    drawBorder(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        };
    };


    flipImage(ctx) {
        ctx.save();
        ctx.translate(this.width, 0);
        ctx.scale(-1, 1);
        this.x = this.x * -1;
    };


    flipImageBack(ctx) {
        this.x = this.x * -1;
        ctx.restore();
    };


    // character.isColliding(chicken);
    isColliding(mo) {
        return this.x + this.width > mo.x && 
            this.y + this.height > mo.y && 
            this.x < mo.x && 
            this.y < mo.y + mo.height
    };
};
