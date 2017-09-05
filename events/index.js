/**
 * author yinwk
 * createTime 2017/09/04 21:51
 * description clown laugh at you~
 */
var EventEmitter = require("events").EventEmitter;
var life = new EventEmitter();
life.setMaxListeners(11);

function water(who){
    console.log("给你家" + who + "倒水喝");
}

life.on("begYou", function (who) {
    console.log("给你家" + who + "揉揉肩");
});

life.on("begYou", function (who) {
    console.log("给你家" + who + "捶捶背");
});

life.on("begYou", water);

life.on("begYou", function (who) {
    console.log("给你家" + who + "做饭吃");
});

life.on("begYou", function (who) {
    console.log("给你家" + who + "洗衣服");
});

life.on("begYou", function (who) {
    console.log("给你家" + who + "喂西瓜");
});

life.on("begYou", function (who) {
    console.log("给你家" + who + "按摩");
});

life.on("begYou", function (who) {
    console.log("给你家" + who + "搓背");
});

life.on("begYou", function (who) {
    console.log("给你家" + who + "...something");
});

life.on("begYou", function (who) {
    console.log("给你家" + who + "...anotherthing");
});

life.on("begYou", function (who) {
    console.log("给你家" + who + "......你想累死我呀");
});

life.on("loveYou", function (who) {
    console.log("给你家" + who + "买化妆品");
});

life.on("loveYou", function (who) {
    console.log("给你家" + who + "买衣服");
});

//life.removeListener("begYou", water);
//life.removeAllListeners();
life.removeAllListeners("loveYou");

var IBegYouCount = life.listeners("begYou").length;
console.log(IBegYouCount);
var ILoveYouCount = EventEmitter.listenerCount(life, "loveYou");
console.log(ILoveYouCount);

var IBegYou = life.emit("begYou", "汉子");
var ILoveYou = life.emit("loveYou", "妹子");
var IMissYou = life.emit("missYou", "妹子汉子");
console.log(IBegYou);
console.log(ILoveYou);
console.log(IMissYou);