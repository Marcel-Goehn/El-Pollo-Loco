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

    imagesDead = [
        "../../assets/img/2_character_pepe/5_dead/D-51.png",
        "../../assets/img/2_character_pepe/5_dead/D-52.png",
        "../../assets/img/2_character_pepe/5_dead/D-53.png",
        "../../assets/img/2_character_pepe/5_dead/D-54.png",
        "../../assets/img/2_character_pepe/5_dead/D-55.png",
        "../../assets/img/2_character_pepe/5_dead/D-56.png",
        "../../assets/img/2_character_pepe/5_dead/D-57.png"
    ];

    imagesHurt = [
        "../../assets/img/2_character_pepe/4_hurt/H-41.png",
        "../../assets/img/2_character_pepe/4_hurt/H-41.png",
        "../../assets/img/2_character_pepe/4_hurt/H-41.png"
    ];

    currentImage = 0;

    constructor(x, y, height, width, speed) {
        super(x, y, height, width, speed);
        this.loadImage("../../assets/img/2_character_pepe/2_walk/W-21.png");
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesJumping);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesDead);
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
            if(this.isDead()) {
                this.playAnimation(this.imagesDead);
            }
            else if (this.isHurt()) {
                this.playAnimation(this.imagesHurt);
            }
            else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(imagesWalking);
            }
            else 
                if(this.isAboveGround()) {
                this.playAnimation(this.imagesJumping);
            }
        }, 50);
    };


    jump() {
        this.speedY = 8;
    };
}