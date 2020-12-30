export default class Game {
    Game(info) {
        ip = info.ip;
        name = info.name;
        type = info.type;
    };

    print() {
        console.log(ip + name + type)
    }
}