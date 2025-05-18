class Endboss extends MoveableObject {

    endBossWalking = [
        '../../assets/img/4_enemie_boss_chicken/2_alert/G5.png',
        '../../assets/img/4_enemie_boss_chicken/2_alert/G6.png',
        '../../assets/img/4_enemie_boss_chicken/2_alert/G7.png',
        '../../assets/img/4_enemie_boss_chicken/2_alert/G8.png',
        '../../assets/img/4_enemie_boss_chicken/2_alert/G9.png',
        '../../assets/img/4_enemie_boss_chicken/2_alert/G10.png',
        '../../assets/img/4_enemie_boss_chicken/2_alert/G11.png',
        '../../assets/img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    currentImage = 0;

    constructor(x, y, height, width, speed) {
        super(x, y, height, width, speed);
        this.loadImage('../../assets/img/4_enemie_boss_chicken/2_alert/G5.png');
    }
}