const Player = require('./Player.js');

class Game {
    constructor(info) {
        this.player = new Player({
            ip: info.ip,
            name: info.name,
            colour: "White"
        })
        this.code = info.code;
        this.opponent = null;
        this.board = null;
    };

    setOpponent(player) {
        this.opponent = new Player({
            ip: player.ip,
            name: player.name,
            colour: "Black"
        })
    }

    getCode() {
        return this.code;
    }

    displayGame() {
        return "Code: " + this.code + "\nPlayer 1:\n" + this.player.print() + "Player 2:\n" + (this.opponent !== null ? this.opponent.print() : "null" + "\n");
    }
}

module.exports = Game