const express = require('express');
const Game = require('./Game.js');
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());

let gameList = [];

const getInfo = (request) => {
    return {
        ip: request.ip,
        name: request.name,
        code: request.code,
        type: request.type === "HOST" ? 1 : (request.type == "JOIN" ? 0 : -1)
    };
}

app.post('/newGame', (req, res) => {
  const info = getInfo(req.body);
  const type = info.type;
  delete(info.type);
  if (type == 1) {
    gameList.push(new Game(info));
  } else if (type == 0) {
    const game = gameList.find(existingGame => existingGame.getCode() === info.code);
    delete(info.code);
    if (!game) {
        console.log('Uhhhhh');
        res.json({error: 'Wrong code.'});
        return;
    }
    game.setOpponent(info);
  } else {
    res.json({error: 'Wrong type.'});
    return;
  }
  res.json(info);
})

app.listen(port, () => {
    console.log('Server started at port', port);
    setInterval(() => {
        for (const game of gameList) {
            console.log(game.displayGame());
        }
        console.log('');
    },
    8000);
})

