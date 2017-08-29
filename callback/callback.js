//回调函数
// function callback(something) {
//     console.log(something + " is cool~");
// }
// function watch(callback, something) {
//     callback(something);
// }
//watch(callback, 'NodeJs');
// watch(function (something) {
//     console.log(something + " is cool~");
// }, "React");
//同步/异步
//阻塞/非阻塞
//单线程、异步and非阻塞
// var c = 0;
// function printIt() {
//     console.log(c);
// }
// function plus(callback) {
//     setTimeout(function timer() {
//         c += 1;
//         callback();
//     }, 1000);
// }
// plus(printIt);
//事件
// var button = document.getElementById("button");
// var clickHandler = function (e) {
//     console.log("click button~");
//     e.stopImmediatePropagation();
// };
// button.addEventListener("click", clickHandler);