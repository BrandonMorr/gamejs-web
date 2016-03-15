/**
 * Created by: some guy names Brandon
 * Date: sometime in march, 2016
 *
 * This is the main controller for the game, I will update this as
 * I go.
 */

var game = new Phaser.Game(1100, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

function preload() {
}

function create() {
}

function update() {
}

game.state.add('GameState', GameState);
game.state.start('GameState');