class StatusBar extends DrawableObject {

    constructor(x, y, height, width, startValue, images) {
        super(x, y, height, width);
        this.images = images;
        this.startValue = startValue;
        this.loadImages(this.images);
        this.setPercentage(startValue);
    }


    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.images[this.resolveImageIndex(this.percentage)];
        this.img = this.imageCache[path];
    };


    resolveImageIndex(per) {
            if (per === 100) {
                return 5;
            }
            else if (per > 80) {
                return 4;
            }
            else if (per > 60) {
                return 3;
            }
            else if (per > 40) {
                return 2;
            }
            else if (per > 20) {
                return 1;
            }
            else {
                return 0;
            }
        }
}