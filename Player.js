class Player{
    constructor(info) {
        this.ip = info.ip;
        this.name = info.name;
        this.colour = info.colour;
    }

    print() {
        return "ip: " + this.ip + "\nname: " + this.name + "\ncolour: " + this.colour + "\n";
    }
}

module.exports = Player;