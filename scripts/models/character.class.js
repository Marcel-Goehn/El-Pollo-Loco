class Character extends MoveableObject {
    imagesWalking = [
        "../../assets/img/2_character_pepe/2_walk/W-21.png",
        "../../assets/img/2_character_pepe/2_walk/W-22.png",
        "../../assets/img/2_character_pepe/2_walk/W-23.png",
        "../../assets/img/2_character_pepe/2_walk/W-24.png",
        "../../assets/img/2_character_pepe/2_walk/W-25.png",
        "../../assets/img/2_character_pepe/2_walk/W-26.png"
    ];

    currentImage = 0;

    constructor(x, y, height, width, speed) {
        super(x, y, height, width, speed);
        this.loadImage("../../assets/img/2_character_pepe/2_walk/W-21.png");
        this.loadImages(this.imagesWalking);
        this.characterAnimateWalking(this.imagesWalking);
    }


    characterAnimateWalking(imagesWalking) {

        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
                this.otherDirection = false;
                this.x += this.speed;
            };
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.otherDirection = true;
                this.x -= this.speed;
            };
            this.world.cameraX = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                let i = this.currentImage % imagesWalking.length;
                let path = imagesWalking[i];
                this.img = this.imageCache[path];
                this.currentImage++;    
            }
        }, 50);
    };


    jump() {

    };
};