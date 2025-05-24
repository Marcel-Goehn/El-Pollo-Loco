class SmallChicken extends MoveableObject {
    
    smallChickensWalking = [
        '../../assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        '../../assets/img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        '../../assets/img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    currentImage = 0;

    constructor(x, y, height, width, speed) {
        super(x, y, height, width, speed);
        this.loadImage('../../assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.smallChickensWalking);
        this.animate(this.smallChickensWalking);
    };
}