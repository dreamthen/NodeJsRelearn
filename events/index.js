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
    console.log("给你家" + who + "按摩");
});

life.on("begYou", function (who) {
    console.log("给你家" + who + "削苹果");
});

life.on("begYou", function (who) {
    console.log("给你家" + who + "喂西瓜");
});

life.on("begYou", function (who) {
    console.log("给你家" + who + "...something");
});

life.on("begYou", function (who) {
    console.log("给你家" + who + "...anotherThing");
});

life.on("begYou", function (who){
    console.log("给你家" + who + "......我快要累死了");
});

life.on("loveYou", function (who){
    console.log("给你家" + who + "买化妆品");
});

life.on("loveYou", function (who){
    console.log("给你家" + who + "买衣服");
});

//life.removeListener("begYou", water);
life.removeAllListeners("begYou");

var begYouListenerCount = life.listeners("begYou").length;
var loveYouListenerCount = EventEmitter.listenerCount(life, "loveYou");
console.log(begYouListenerCount);
console.log(loveYouListenerCount);

var begYouListener = life.emit("begYou", "汉子");
var loveYouListener  = life.emit("loveYou", "妹子");
var kissYouListener = life.emit("kissYou", "汉子妹子");
console.log(begYouListener);
console.log(loveYouListener);
console.log(kissYouListener);