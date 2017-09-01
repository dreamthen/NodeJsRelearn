var http = require("http");
var cheerio = require("cheerio");
var url = "http://www.imooc.com/comment/348";

function filterComment(html) {
    var $ = cheerio.load(html);
    var postRow = $(".post-row");
    var commentData = [];
    postRow.each(function () {
        var row = $(this);
        var userRow = row.find(".tit");
        var userName = userRow.text();
        var coursesLine = userRow.find("a").attr("href").split("u/")[1].indexOf("/");
        var userId = userRow.find("a").attr("href").split("u/")[1].slice(0, coursesLine);
        var content = row.find(".cnt").text();
        commentData.push({
            name: userName,
            id: userId,
            content: content
        });
    });
    return commentData;
}

function printComment(commentData) {
    commentData.forEach(function (comment) {
        console.log("【" + comment.id + "】" + comment.name + "            " + comment.content + "\n");
    });
}

http.get(url, function (response) {
    var html = "";
    response.on("data", function (data) {
        html += data;
    });
    response.on("end", function () {
        var commentData = filterComment(html);
        printComment(commentData);
    });
}).on("error", function () {
    console.log("获取数据错误~");
});