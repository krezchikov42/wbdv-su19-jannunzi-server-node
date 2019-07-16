var express = require('express')
var app = express()

var helloController = require('./controllers/HelloController.js')(app)

app.listen(3000)