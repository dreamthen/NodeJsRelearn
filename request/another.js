/**
 * author yinwk
 * createTime 2017/09/17 10:30
 * description clown laugh at you~
 */
//"/course/docomment"
// Accept: "application/json, text/javascript, */*; q=0.01",
// "Accept-Encoding": "gzip, deflate",
// "Accept-Language": "zh-CN,zh;q=0.8",
// Connection: "keep-alive",
// "Content-Length": queryParams.length,
// "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
// Cookie: "imooc_uuid=62413c8f-7af4-4864-83ef-80b23b451ecc; imooc_isnew_ct=1503407895; loginstate=1; apsid=RiZTdlZDgwMjFkMWFhMjA4NzZhZDIzNDAwZDM2YWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjIzNDQ0MQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkcmVhbXRoZW4uMDBAZ21haWwuY29tAAAAAAAAAAAAAGEzYzZmNTQ4MzBjNjkxZGUzNDE0YzJhNjJmN2MyZGNiKH6cWSh%2BnFk%3DNT; PHPSESSID=gdaqntlf10seenfiq69b5qg9s1; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1503407897,1504620142,1505616788; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1505616800; imooc_isnew=2; cvde=59bde3923c12e-12",
// Host: "www.imooc.com",
// Origin: "http://www.imooc.com",
// Referer: "http://www.imooc.com/video/8837",
// "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
// "X-Requested-With": "XMLHttpRequest"
var http = require("http");
var querystring = require("querystring");

var requestData = {
    content: "继续测试，Scott最帅!",
    mid: 8837
};

var requestParams = querystring.stringify(requestData);
var options = {
    hostname:"www.imooc.com",
    port:80,
    path:"/course/docomment",
    method:"post",
    headers:{
        Accept: "application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.8",
        Connection: "keep-alive",
        "Content-Length": requestParams.length,
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Cookie: "imooc_uuid=62413c8f-7af4-4864-83ef-80b23b451ecc; imooc_isnew_ct=1503407895; loginstate=1; apsid=RiZTdlZDgwMjFkMWFhMjA4NzZhZDIzNDAwZDM2YWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjIzNDQ0MQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkcmVhbXRoZW4uMDBAZ21haWwuY29tAAAAAAAAAAAAAGEzYzZmNTQ4MzBjNjkxZGUzNDE0YzJhNjJmN2MyZGNiKH6cWSh%2BnFk%3DNT; PHPSESSID=gdaqntlf10seenfiq69b5qg9s1; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1503407897,1504620142,1505616788; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1505616800; imooc_isnew=2; cvde=59bde3923c12e-12",
        Host: "www.imooc.com",
        Origin: "http://www.imooc.com",
        Referer: "http://www.imooc.com/video/8837",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest"
    }
};

var request = http.request(options, function(response) {
    var statusCode = response.statusCode,
        headers = response.headers;
    console.log("statusCode:" + statusCode);
    console.log("headers:" + JSON.stringify(headers));
    response.on("data", function (chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });
    response.on("end", function () {
        console.log("提交成功");
    });
});

request.on("error", function(error){
    console.log("提交失败:" + error);
});

request.write(requestParams);
request.end();