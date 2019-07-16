module.exports = function(app) {

	// console.log(app)

	var helloData = require('./hello.json')

	function hello(req, res) {
		res.send(helloData)
	}

	app.get("/hello", hello)
}