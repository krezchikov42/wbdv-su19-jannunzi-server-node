var universityDao = require('../daos/university.dao.server');

module.exports = function (app) {


	function createStudent(req, res) {
		var student = req.body
		let students =  universityDao.createStudent(student)
		res.json(students)
	}

	function findAllStudents(req, res) {
		let students = universityDao.findAllStudents()
		res.json(students)
	}

	function findStudentById(req, res) {
		var studentId = req.params['sid'];
		let student = universityDao.findStudentById(studentId)
		res.json(student)
	}

	function updateStudent(req, res) {
		var studentId = req.params['sid'];
		var studentUpdates = req.body
		let students = universityDao.updateStudent(studentId,studentUpdates)
		res.json(students)
	}

	function deleteStudent(req, res) {
		var studentId = req.params['sid'];
		let students = universityDao.deleteStudent(studentId)
		res.json(students)
	}

	app.post('/api/student', createStudent);
	app.get('/api/student', findAllStudents);
	app.get('/api/student/:sid', findStudentById);
	app.put('/api/student/:sid', updateStudent);
	app.delete('/api/student/:sid', deleteStudent);
}
