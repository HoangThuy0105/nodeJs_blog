const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hoang Thuy')
})

app.listen(port, () => {
  console.log(`Example app listening at port http://localhost:${port}`)
})