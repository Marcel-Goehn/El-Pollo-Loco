class Chicken extends MoveableObject {

    chickensWalking = [
        'assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    currentImage = 0;

    constructor(x, y, height, width, speed) {
        super(x, y, height, width, speed);
        this.loadImage("assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
        this.loadImages(this.chickensWalking);
        this.animate();
    };


    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.chickensWalking);
        }, 100);
    }
};
