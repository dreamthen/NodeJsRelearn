/**
 * author yinwk
 * createTime 2017/8/16 12:57
 * description clown laugh at you~
 */
const className = require("./class");

function add(classes) {
    classes.forEach(function classer(classItem, classIndex) {
        console.log("new class coming~~~");
        className.add(classItem["teacher"], classItem["students"]);
    });
}

exports.add = add;