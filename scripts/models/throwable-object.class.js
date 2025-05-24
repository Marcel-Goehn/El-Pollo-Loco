class ThrowableObject extends MoveableObject {
    constructor(x, y, height, width) {
        super();
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.loadImage("../../assets/img/6_salsa_bottle/salsa_bottle.png");
        this.throw();
    };


    throw() {
        this.speedY = 5;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }
}