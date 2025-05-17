class World {

    character = new Character(100, 100, 350, 150, 5);

    enemies = [
        new Chicken((200 + Math.random() * 500), 370, 70, 60, (0.15 + Math.random() * 0.25)),
        new Chicken((200 + Math.random() * 500), 370, 70, 60, (0.15 + Math.random() * 0.25)),
        new Chicken((200 + Math.random() * 500), 370, 70, 60, (0.15 + Math.random() * 0.25))
];

    clouds = new Cloud(Math.random() * 700, 0, 250, 500, 0.15);

    backgrounds = [
        new Background(0, 480, 720, "../../assets/img/5_background/layers/air.png"),
        new Background(0, 400, 720, "../../assets/img/5_background/layers/3_third_layer/1.png"),
        new Background(0, 400, 720, "../../assets/img/5_background/layers/2_second_layer/1.png"),
        new Background(0, 400, 720, "../../assets/img/5_background/layers/1_first_layer/1.png")
    ];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.drawWorld();
    };

    
    setWorld() {
        this.character.keyboard = this.keyboard;
    }


    drawWorld() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgrounds);
        this.addToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);

        // drawWorld() wird immer wieder aufgerufen. let self = this; muss gemacht werden da in einer Funktion wie dieser das Wort this nicht gekannt wird wieso auch immer.
        let self = this;
        requestAnimationFrame(function() {
            self.drawWorld();
        });
    };


    addObjectsToMap(obj) {
        obj.forEach(o => {
            this.ctx.drawImage(o.img, o.x, o.y, o.width, o.height);
        });
    };


    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    };
};