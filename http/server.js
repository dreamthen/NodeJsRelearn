/**
 * author yinwk
 * createTime 2017/8/16 11:03
 * description clown laugh at you~
 */
/**
 * 核心模块，文件模块和第三方模块
 */
const http = require("http");
const server = http.createServer(function server(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("<div>Hello world</div>");
});

server.listen(9079, "127.0.0.1");