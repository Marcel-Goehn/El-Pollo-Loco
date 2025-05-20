class Cloud extends MoveableObject{
    constructor(x, y, height, width, speed) {
        super(x, y, height, width, speed);
        this.loadImage('../../assets/img/5_background/layers/4_clouds/full.png');
        this.animate();
    };


    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
};