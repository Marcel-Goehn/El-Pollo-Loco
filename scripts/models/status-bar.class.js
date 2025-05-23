class StatusBar extends DrawableObject {
    imagesHealth = [
        "../../assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png",
        "../../assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
        "../../assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
        "../../assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
        "../../assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
        "../../assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png"
    ];

    percentage = 100;

    constructor(x, y, height, width) {
        super(x, y, height, width);
        this.loadImages(this.imagesHealth);
        this.setPercentage(100);
    }


    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.imagesHealth[this.resolveImageIndex(this.percentage)];
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