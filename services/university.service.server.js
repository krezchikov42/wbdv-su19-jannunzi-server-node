module.exports = function(app) {
	var universityDao = require('../daos/university.dao.server.js')

	function createStudent(req, res) {
		var student = req.body;
		res.json(universityDao.createStudent(student))
	}
	function deleteStudent(req, res) {
		var sid = req.params['sid'];
		res.json(universityDao.deleteStudent('sid'))
	}
	function findAllStudents(req, res) {
		res.json(universityDao.findAllStudents());
	}
	function findStudentById(req, res) {
		res.json(
			universityDao.findStudentById(req.params['sid'])
		)
	}
	function findAllQuestions(req, res) {
		res.json(universityDao.findAllQuestions());
	}
	function findQuestionById(req, res) {
		res.json(
			universityDao.findQuestionById(req.params['qid'])
		)	
	}
	app.post("/api/studentsa", createStudent);
	app.get("/api/studentsa", findAllStudents);
	app.get("/api/studentsa/:sid", findStudentById);
	app.delete("/api/studentsa/:sid", deleteStudent);
	app.get("/api/questionsa", findAllQuestions);
	app.get("/api/questionsa/:qid", findQuestionById);
}