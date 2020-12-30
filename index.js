const express = require('express')
const port = process.env.PORT || 5000
const app = express()
app.use(express.json())

const getInfo = (request) => {
    return request.x
}

const startGame = (info) => {
    console.log(info)
}

app.post('/newGame', (req, res) => {
  const info = getInfo(req.body);
  res.json({data: info});
  startGame(info)
})

app.listen(port, () => console.log('Server started at port', port))

