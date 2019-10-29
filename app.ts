const express = require('express')
const app = express()
const port = 3000
app.use(express.static("static"))
app.get('/', function(req, res) {
    res.render("index.html")
})
app.get(/a/, function(req, res) {
    res.send('the url has an a in it')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))