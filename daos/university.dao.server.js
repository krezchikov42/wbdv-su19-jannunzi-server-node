
var students = require('../data/students.json');
var questions = require('../data/questions.json');
var answers = require('../data/answers.json');
function createStudent(student) {
	students.push(student);
	return students;
}
function deleteStudent(sid) {
	var index = students.findIndex(student => student._id == sid)
	students.splice(index, 1)
	return students;
}
function findAllStudents() {
	return students;
}
function findStudentById(sid) {
	return students.find(student => student._id == sid)
}
function findAllQuestions() {
	return questions;
}
function findQuestionById(qid) {
	return questions.find(question => question._id == qid)
}

module.exports = {
	createStudent,
	deleteStudent,
	findAllStudents,
	findStudentById,
	findAllQuestions,
	findQuestionById
};