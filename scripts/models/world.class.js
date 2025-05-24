class World {

    character = new Character(100, 100, 350, 150, 5);
    statusBar = new StatusBar(40, 0, 60, 200);
    throwableObject = [new ThrowableObject(100, 100, 100, 100)];

    level = level1;
    cameraX = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.drawWorld();
        this.run();
    };


    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 1000);
    };


    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.hp);
            };
        });
    };


    checkThrowObjects() {
        if(this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x, this.character.y, 100, 100);
            this.throwableObject.push(bottle);
        }
    };


    setWorld() {
        this.character.world = this;
    };


    drawWorld() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.cameraX, 0);

        this.addObjectsToMap(this.level.backgrounds);
        this.addToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.level.endboss);
        this.addToMap(this.character);
        this.addObjectsToMap(this.throwableObject);

        this.ctx.translate(-this.cameraX, 0); //Backwards
        // ----- Space for fixed objects -----
        this.addToMap(this.statusBar);
        this.ctx.translate(this.cameraX, 0); // Forwards

        this.ctx.translate(-this.cameraX, 0);

        // drawWorld() wird immer wieder aufgerufen. let self = this; muss gemacht werden da in einer Funktion wie dieser das Wort this nicht gekannt wird wieso auch immer.
        let self = this;
        requestAnimationFrame(function () {
            self.drawWorld();
        });
    };


    addObjectsToMap(obj) {
        obj.forEach(o => {
            if (obj.otherDirection) {
                o.flipImage(this.ctx);
            };

            o.draw(this.ctx);
            o.drawBorder(this.ctx);

            if (obj.otherDirection) {
                o.flipImageBack(this.ctx);
            };
        });
    };


    addToMap(mo) {
        if (mo.otherDirection) {
            mo.flipImage(this.ctx);
        };

        mo.draw(this.ctx);
        mo.drawBorder(this.ctx);

        if (mo.otherDirection) {
            mo.flipImageBack(this.ctx);
        };
    };
};
