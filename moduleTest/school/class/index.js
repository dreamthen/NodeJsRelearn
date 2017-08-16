/**
 * author yinwk
 * createTime 2017/8/16 13:34
 * description clown laugh at you~
 */
const teacher = require("./teacher");
const student = require("./students");

function add(oneTeacher, students) {
    teacher.add(oneTeacher);
    students.forEach(function studenter(studentItem, studentIndex) {
        student.add(studentItem);
    });
}

exports.add = add;