const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World From ExpressJS')
})
app.get(/a/, function (req, res) {
  res.send('the url has an a in it')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))