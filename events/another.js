/**
 * author yinwk
 * createTime 2017/09/04 21:51
 * description clown laugh at you~
 */
var EventEmitter = require("events").EventEmitter;
var life = new EventEmitter();
life.setMaxListeners(11);

function water(who){
    console.log("我请求" + who + "烧水");
}

life.on("begYou", function (who) {
    console.log("我请求" + who + "按摩肩");
});

life.on("begYou", function (who) {
    console.log("我请求" + who + "洗衣服");
});

life.on("begYou", function (who) {
    console.log("我请求" + who + "做饭菜");
});

life.on("begYou", function (who) {
    console.log("我请求" + who + "喂西瓜");
});

life.on("begYou", water);

life.on("begYou", function (who) {
    console.log("我请求" + who + "......things6");
});

life.on("begYou", function (who) {
    console.log("我请求" + who + "......things7");
});

life.on("begYou", function (who) {
    console.log("我请求" + who + "......things8");
});

life.on("begYou", function (who) {
    console.log("我请求" + who + "......things9");
});

life.on("begYou", function (who) {
    console.log("我请求" + who + "......things10");
});

life.on("begYou", function (who) {
    console.log("我请求" + who + "......things11");
});

life.on("loveYou", function (who) {
    console.log(who + ",给我买衣服");
});

life.on("loveYou", function (who) {
    console.log(who + ",给我买化妆品");
});

life.removeListener("begYou", function (who){
    console.log("我请求" + who + "烧水");
});
//life.removeListener("begYou", water);
//life.removeAllListeners("loveYou");

var begYouCount = life.listeners("begYou").length;
// var loveYouCount = life.listeners("loveYou").length;
var loveYouCount = EventEmitter.listenerCount(life, "loveYou");
console.log(life.emit("begYou", "老婆"));
console.log(life.emit("loveYou", "老公"));
console.log(life.emit("hateYou", "老公and老婆"));

console.log(begYouCount);
console.log(loveYouCount);