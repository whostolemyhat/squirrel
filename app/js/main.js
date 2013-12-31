/* global Phaser */
/* global World */
/* global Player */

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });
var cursors;
var playerSprite;

function preload() {
    game.load.image('squirrel', '../img/squirrel.png');
    game.load.image('grass1', '../img/grass1.png');
    game.load.image('grass2', '../img/grass2.png');
    game.load.image('grass3', '../img/grass3.png');
    game.load.image('grass4', '../img/grass4.png');
}

function create() {
    var world = new World();
    var player = new Player(world, 'squirrel');

    console.log(world);
    console.log(player);

    game.stage.backgroundColor = '03890d';

    game.world.setBounds(0, 0, 1400, 1500);

    for(var i = 0; i < 100; i++) {
        game.add.sprite(game.world.randomX, game.world.randomY, 'grass' + Math.ceil(Math.random() * 4));
    }
    
    playerSprite = game.add.sprite(game.camera.width / 2, game.camera.height / 2, player.surface);
    playerSprite.scale.setTo(player.size, player.size);
    playerSprite.anchor.setTo(0.5, 0.5);
    game.camera.follow(playerSprite, Phaser.Camera.FOLLOW_PLATFORMER);

    cursors = game.input.keyboard.createCursorKeys();
}

function render() {

}

function update() {
    playerSprite.body.velocity.setTo(0, 0);

    if(cursors.up.isDown) {
        playerSprite.body.velocity.y = -200;
    } else if(cursors.down.isDown) {
        playerSprite.body.velocity.y = 200;
    }
    if(cursors.left.isDown) {
        playerSprite.body.velocity.x = -200;
    } else if(cursors.right.isDown) {
        playerSprite.body.velocity.x = 200;
    }
}
