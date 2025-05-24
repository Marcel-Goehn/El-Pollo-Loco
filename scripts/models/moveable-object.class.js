class MoveableObject extends DrawableObject {
    otherDirection = false;
    speedY = 0;
    acceleration = 0.25;
    hp = 100;
    lastHit = 0;

    constructor(x, y, height, width, speed) {
        super(x, y, height, width);
        this.speed = speed;
    };


    animate(walking) {
        if (!(this instanceof Coin)) {
            setInterval(() => {
                this.moveLeft();
            }, 1000 / 60);
        }

        if (!(this instanceof Cloud)) {
            setInterval(() => {
                this.playAnimation(walking);
            }, 100);
        };
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
        if (this instanceof ThrowableObject) { // Throable object should always fall
            return true;
        }
        else {
            return this.y < 100;
        }
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
            this.x < mo.x + mo.width &&
            this.y < mo.y + mo.height
    };


    hit() {
        this.hp -= 5;
        if (this.hp < 0) {
            this.hp = 0;
        }
        else {
            this.lastHit = new Date().getTime();
        };
    };


    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }


    isDead() {
        return this.hp === 0;
    }
};
