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
            if (this.keyboard.RIGHT) {
                this.otherDirection = false;
                this.x += this.speed;
            }
            if (this.keyboard.LEFT) {
                this.otherDirection = true;
                this.x -= this.speed;
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.keyboard.RIGHT || this.keyboard.LEFT) {
                this.x += this.speed;

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