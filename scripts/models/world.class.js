class World {

    character = new Character(100, 100, 350, 150, 5);
    level = level1;
    cameraX = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.drawWorld();
    };

    
    setWorld() {
        this.character.world = this;
    }


    drawWorld() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.cameraX, 0);

        this.addObjectsToMap(this.level.backgrounds);
        this.addToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.level.endboss);
        this.addToMap(this.character);

        this.ctx.translate(-this.cameraX, 0);

        // drawWorld() wird immer wieder aufgerufen. let self = this; muss gemacht werden da in einer Funktion wie dieser das Wort this nicht gekannt wird wieso auch immer.
        let self = this;
        requestAnimationFrame(function() {
            self.drawWorld();
        });
    };


    addObjectsToMap(obj) {
        obj.forEach(o => {
            if (obj.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
            };

            this.ctx.drawImage(o.img, o.x, o.y, o.width, o.height);

            if (obj.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
            };
        });
    };


    addToMap(mo) {
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        };

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);

        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        };
    };
};