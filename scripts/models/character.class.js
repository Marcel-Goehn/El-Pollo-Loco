class Character extends MoveableObject {
    imagesWalking = [
        "../../assets/img/2_character_pepe/2_walk/W-21.png",
        "../../assets/img/2_character_pepe/2_walk/W-22.png",
        "../../assets/img/2_character_pepe/2_walk/W-23.png",
        "../../assets/img/2_character_pepe/2_walk/W-24.png",
        "../../assets/img/2_character_pepe/2_walk/W-25.png",
        "../../assets/img/2_character_pepe/2_walk/W-26.png"
    ];

    imagesJumping = [
        "../../assets/img/2_character_pepe/3_jump/J-31.png",
        "../../assets/img/2_character_pepe/3_jump/J-32.png",
        "../../assets/img/2_character_pepe/3_jump/J-33.png",
        "../../assets/img/2_character_pepe/3_jump/J-34.png",
        "../../assets/img/2_character_pepe/3_jump/J-35.png",
        "../../assets/img/2_character_pepe/3_jump/J-36.png",
        "../../assets/img/2_character_pepe/3_jump/J-37.png",
        "../../assets/img/2_character_pepe/3_jump/J-38.png",
        "../../assets/img/2_character_pepe/3_jump/J-39.png"
    ];

    currentImage = 0;

    constructor(x, y, height, width, speed) {
        super(x, y, height, width, speed);
        this.loadImage("../../assets/img/2_character_pepe/2_walk/W-21.png");
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesJumping);
        this.applyGravity();
        this.characterAnimate(this.imagesWalking);
    }


    characterAnimate(imagesWalking) {

        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
                this.otherDirection = false;
                this.moveRight();
            };
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.otherDirection = true;
                this.moveLeft();
            };
            if (!this.isAboveGround() && this.world.keyboard.UP || this.world.keyboard.SPACE) {
                this.jump();
            }
            this.world.cameraX = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(imagesWalking);
            };
            if (this.isAboveGround()) {
                this.playAnimation(this.imagesJumping);
            };
        }, 50);
    };


    jump() {
        this.speedY = 8;
    };
}