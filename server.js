var express = require('express')
var app = express()

var helloController = require('./controllers/HelloController.js')(app)

var universityService = require(
	'./services/university.service.server.js')
universityService(app)

app.listen(3000)