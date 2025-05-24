class Coin extends MoveableObject{

    coinImages = [
        "../../assets/img/8_coin/coin_1.png",
        "../../assets/img/8_coin/coin_2.png"
    ];

    currentImage = 0;

    constructor(x, y, height, width) {
        super(x, y, height, width);
        this.loadImage("../../assets/img/8_coin/coin_1.png");
        this.loadImages(this.coinImages);
        this.animate(this.coinImages);
    };
}