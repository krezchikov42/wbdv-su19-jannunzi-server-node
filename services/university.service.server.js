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
	app.post("/api/students", createStudent);
	app.delete("/api/students/:sid", deleteStudent);
	app.get("/api/students", findAllStudents);
	app.get("/api/students/:sid", findStudentById);
	app.get("/api/questions", findAllQuestions);
	app.get("/api/questions/:qid", findQuestionById);
}