class World {

    character = new Character(120, 250, 150, 100);
    enemies = [
        new Chicken((200 + Math.random() * 500), 250, 150, 100),
        new Chicken((200 + Math.random() * 500), 250, 150, 100),
        new Chicken((200 + Math.random() * 500), 250, 150, 100)
];

    clouds = [
        new Cloud(Math.random() * 700, 0, 250, 500),
    ]

    background = new Background();

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.drawWorld();
    }

    drawWorld() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.clouds.forEach(cloud => {
            this.ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height);
        })
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        

        // drawWorld() wird immer wieder aufgerufen. let self = this; muss gemacht werden da in einer Funktion wie dieser das Wort this nicht gekannt wird wieso auch immer.
        let self = this;
        requestAnimationFrame(function() {
            self.drawWorld();
        })


        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        })
    };
}