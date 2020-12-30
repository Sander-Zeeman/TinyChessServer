const express = require('express')
const port = process.env.PORT || 5000
const app = express()

app.get('/api', (req, res) => {
  res.status(200).json({api: 'version 1'})
})

app.listen(port, () => console.log('Server started at port', port))

