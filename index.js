const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World! This is my first pipeline :D</h1><br/> <p>What a wonderful day!</p>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})