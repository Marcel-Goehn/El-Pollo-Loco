const level1 = new Level(
    [
        new Chicken((200 + Math.random() * 500), 370, 70, 60, (0.15 + Math.random() * 0.25)),
        new Chicken((200 + Math.random() * 500), 370, 70, 60, (0.15 + Math.random() * 0.25)),
        new Chicken((700 + Math.random() * 700), 370, 70, 60, (0.15 + Math.random() * 0.25)),
        new Chicken((700 + Math.random() * 700), 370, 70, 60, (0.15 + Math.random() * 0.25)),
        new Chicken((1400 + Math.random() * 700), 370, 70, 60, (0.15 + Math.random() * 0.25)),
        new Chicken((1400 + Math.random() * 700), 370, 70, 60, (0.15 + Math.random() * 0.25))
    ],
    [
        new SmallChicken((200 + Math.random() * 500), 370, 70, 60, (0.15 + Math.random() * 0.25)),
        new SmallChicken((200 + Math.random() * 500), 370, 70, 60, (0.15 + Math.random() * 0.25)),
        new SmallChicken((700 + Math.random() * 700), 370, 70, 60, (0.15 + Math.random() * 0.25)),
        new SmallChicken((700 + Math.random() * 700), 370, 70, 60, (0.15 + Math.random() * 0.25)),
        new SmallChicken((1400 + Math.random() * 700), 370, 70, 60, (0.15 + Math.random() * 0.25)),
        new SmallChicken((1400 + Math.random() * 700), 370, 70, 60, (0.15 + Math.random() * 0.25))
    ],
    [
        new Cloud(Math.random() * 700, 0, 250, 500, 0.15),
        new Cloud(800 + (Math.random() * 700), 0, 250, 500, 0.15),
        new Cloud(1600 + (Math.random() * 700), 0, 250, 500, 0.15),
        new Cloud(2400 + (Math.random() * 700), 0, 250, 500, 0.15),
        new Cloud(3200 + (Math.random() * 700), 0, 250, 500, 0.15)
    ],
    [
        new Background(-719, 480, 720, "../../assets/img/5_background/layers/air.png"),
        new Background(-719, 400, 720, "../../assets/img/5_background/layers/3_third_layer/2.png"),
        new Background(-719, 400, 720, "../../assets/img/5_background/layers/2_second_layer/2.png"),
        new Background(-719, 400, 720, "../../assets/img/5_background/layers/1_first_layer/2.png"),

        new Background(0, 480, 720, "../../assets/img/5_background/layers/air.png"),
        new Background(0, 400, 720, "../../assets/img/5_background/layers/3_third_layer/1.png"),
        new Background(0, 400, 720, "../../assets/img/5_background/layers/2_second_layer/1.png"),
        new Background(0, 400, 720, "../../assets/img/5_background/layers/1_first_layer/1.png"),

        new Background(719, 480, 720, "../../assets/img/5_background/layers/air.png"),
        new Background(719, 400, 720, "../../assets/img/5_background/layers/3_third_layer/2.png"),
        new Background(719, 400, 720, "../../assets/img/5_background/layers/2_second_layer/2.png"),
        new Background(719, 400, 720, "../../assets/img/5_background/layers/1_first_layer/2.png"),

        new Background(719 * 2, 480, 720, "../../assets/img/5_background/layers/air.png"),
        new Background(719 * 2, 400, 720, "../../assets/img/5_background/layers/3_third_layer/1.png"),
        new Background(719 * 2, 400, 720, "../../assets/img/5_background/layers/2_second_layer/1.png"),
        new Background(719 * 2, 400, 720, "../../assets/img/5_background/layers/1_first_layer/1.png"),

        new Background(719 * 3, 480, 720, "../../assets/img/5_background/layers/air.png"),
        new Background(719 * 3, 400, 720, "../../assets/img/5_background/layers/3_third_layer/2.png"),
        new Background(719 * 3, 400, 720, "../../assets/img/5_background/layers/2_second_layer/2.png"),
        new Background(719 * 3, 400, 720, "../../assets/img/5_background/layers/1_first_layer/2.png")
    ],
    [
        new Coin(900, 180, 150, 150),
        new Coin(950, 130, 150, 150),
        new Coin(1000, 80, 150, 150),
        new Coin(1050, 130, 150, 150),
        new Coin(1100, 180, 150, 150),

        new Coin(1800, 180, 150, 150),
        new Coin(1850, 130, 150, 150),
        new Coin(1900, 80, 150, 150),
        new Coin(1950, 130, 150, 150),
        new Coin(2000, 180, 150, 150)
    ],
    new Endboss(2550, -20, 500, 300, 0)
);