class Cloud extends MoveableObject{
    constructor(x, y, height, width) {
        super(x, y, height, width);
        this.loadImage('../../assets/img/5_background/layers/4_clouds/full.png');
        this.moveLeft();
    };
};