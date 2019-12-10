const mongoose = require('mongoose')
const questionSchema = require('../models/question.schema.server.js')
const questionModel = mongoose.model('QuestionModel', questionSchema)
var univsitydao = require('../daos/university.dao.server')

module.exports = function(app) {
	function createQuestion(req, res) {
		const question = req.body;
		let questions = univsitydao.createQuestion(question)
		res.json(questions)
	}

	function findAllQuestions(req, res) {
		let questions = univsitydao.findAllQuestions()
		res.json(questions)
	}

	function findQuestionbyId(req, res) {
		var questionId = req.params['id'];
		let question = univsitydao.findQuestionById(questionId)
		res.json(question)
	}

	function updateQuestion(req, res) {
		var questionId = req.params['id'];
		var questionUpdate = req.body
		let question = univsitydao.updateQuestion(questionId, questionUpdate)
		res.json(question)
	}

	function deleteQuestion(req, res) {
		var questionId = req.params['id'];
		let questions = univsitydao.deleteQuestion(questionId)
		res.json(questions)
	}

	app.post('/api/question', createQuestion)
	app.get('/api/question', findAllQuestions)
	app.get('/api/question/:id', findQuestionbyId)
	app.put('/api/question/:id',updateQuestion)
	app.delete('/api/question/:id',deleteQuestion)
}
