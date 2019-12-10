const mongoose = require('mongoose')
const answerSchema = require('../models/answer.schema.server.js')
const answerModel = mongoose.model('AnswerModel', answerSchema)
const universitydao = require('../daos/university.dao.server')

module.exports = function(app) {
	function studentAnswersQuestion(req, res) {
		const answer = req.body;
		const sid = req.params.sid;
		const qid = req.params.qid;
		let answers = universitydao.answerQuestion(sid,qid,answer)
		res.json(answers)
	}

	function findAllAnswers(req, res) {
		let answers = universitydao.findAllAnswers()
		res.json(answers)
	}

	function findAnswerById(req, res) {
		let aid = req.params.aid
		let answer = universitydao.findAnswerById(aid)
		res.json(answer)
	}

	function findAnswersForQuestion(req,res) {
		let qid = req.params.qid
		let answers = universitydao.findAnswersByQuestion(qid)
		res.json(answers)
	}

	function findAnswersForStudent(req,res) {
		let sid = req.params.sid
		let answers = universitydao.findAnswersByStudent(sid)
		res.json(answers)
	}

	function findAnswersByStudentForQuestion(req,res) {
		let sid = req.params.sid
		let qid = req.params.qid
		let answers = universitydao.findAnswersByStudentForQuestion(sid,qid)
		res.json(answers)

	}

	app.post('/api/student/:sid/question/:qid/answer', studentAnswersQuestion)	
	app.get('/api/answer', findAllAnswers)
	app.get('/api/answer/:aid',findAnswerById)
	app.get('/api/question/:qid/answer', findAnswersForQuestion)
	app.get('/api/student/:sid/answer',findAnswersForStudent )
	app.get('/api/student/:sid/question/:qid/answer',findAnswersByStudentForQuestion)
	app.get('/api/question/:qid/student/:sid/answer', findAnswersByStudentForQuestion)

}
