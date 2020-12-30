const express = require('express')
const port = process.env.PORT || 5000
const app = express()
app.use(express.json())

const getInfo = (request) => {
    return {
        ip: request.ip,
        name: request.name,
        type: request.type === "HOST" ? 1 : (request.type == "JOIN" ? 0 : -1)
    }
}

const startGame = (info) => {
    console.log(info)
}

app.post('/newGame', (req, res) => {
  const info = getInfo(req.body);
  res.json(info);
  while (true) {}
})

app.listen(port, () => console.log('Server started at port', port))

