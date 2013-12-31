function Player(options, sprite) {
    this.x = options.WINWIDTH / 2;
    this.y = options.WINHEIGHT / 2;
    this.rect = options.rect;
    this.surface = sprite;
    this.facing = 'left';
    this.size = 3;
    this.bounceRate = options.bounceRate || 6;
    this.bounceHeight = options.bounceHeight || 30;
    this.health = 3;
    this.moveRate = 9;
    this.invulnTime = 2;

}
