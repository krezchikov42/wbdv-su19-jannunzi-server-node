
var students = require('../data/students.json');
var questions = require('../data/questions.json');
var answers = require('../data/answers.json');
// var studentModel = require('../models/student.model.server');

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
function updateStudent(studentId,student) {
	var index = students.findIndex(student => student._id == studentId)
	students[index] = student
	return students;
}


function createQuestion(question) {
	questions.push(question)
	return questions
}

function findAllQuestions() {
	return questions;
}
function findQuestionById(qid) {
	return questions.find(question => question._id == qid)
}
function deleteStudent(studentId) {
	return studentModel.remove({_id: studentId})
}

function deleteQuestion(questionId) {
	var index = questions.findIndex(question => question._id == questionId)
	questions.splice(index,1)
	return questions;
}

function updateQuestion(questionId, questionUpdate) {
	var index = questions.findIndex(question => question._id == questionId)
	questions[index] = questionUpdate
	return questions
}

function answerQuestion(studentId, questionId, answer) {
	answer['student'] = studentId
	answer['question'] = questionId
	answers.push(answer)
	return answers
}

function findAllAnswers() {
	return answers
}

function findAnswerById(answerId) {
	return answers.find(answer => answer._id == answerId)

}

function findAnswersByStudent(studentId) {
	return answers.filter(answer => answer.student == studentId)
}

function findAnswersByQuestion(questionId) {
	return answers.filter(answer => answer.question == questionId)
}

function findAnswersByStudentForQuestion(sid, qid) {
	return answers.filter(answer => answer.question == qid && answer.student == sid)
}


module.exports = {
	createStudent,
	deleteStudent,
	findAllStudents,
	findStudentById,
	findAllQuestions,
	findQuestionById,
	answerQuestion,
	deleteQuestion,
	createQuestion,
	updateQuestion,
	findAllAnswers,
	findAnswerById,
	findAnswersByStudent,
	updateStudent,
	findAnswersByQuestion,
	findAnswersByStudentForQuestion
};
