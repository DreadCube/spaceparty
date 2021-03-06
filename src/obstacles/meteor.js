export default class Meteor {
    game = null
    meteor = null

    constructor(game, x, y, r) {
        this.game = game

        this.meteor = this.game.add.sprite(x, y, 'meteor_' + this.game.rnd.integerInRange(1, 7))
        this.meteor.anchor.setTo(0.5, 0.5)

        this.meteor.update = () => this.update()
    }

    update() {
        this.meteor.rotation += 0.01
    }
}
