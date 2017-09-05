// 'Accept': 'application/json, text/javascript, */*; q=0.01',
//     'Accept-Encoding': 'gzip, deflate',
//     'Accept-Language': 'zh-CN,zh;q=0.8',
//     'Connection': 'keep-alive',
//     'Content-Length': requestData.length,
//     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//     'Cookie': 'imooc_uuid=62413c8f-7af4-4864-83ef-80b23b451ecc; imooc_isnew_ct=1503407895; loginstate=1; apsid=RiZTdlZDgwMjFkMWFhMjA4NzZhZDIzNDAwZDM2YWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjIzNDQ0MQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkcmVhbXRoZW4uMDBAZ21haWwuY29tAAAAAAAAAAAAAGEzYzZmNTQ4MzBjNjkxZGUzNDE0YzJhNjJmN2MyZGNiKH6cWSh%2BnFk%3DNT; PHPSESSID=blbf4lltkk1e6p9ciimg7l0ff7; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1503407897,1504620142; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1504622323; imooc_isnew=2; cvde=59aeae6c3c18c-46',
//     'Host': 'www.imooc.com',
//     'Origin': 'http://www.imooc.com',
//     'Referer': 'http://www.imooc.com/video/8837',
//     'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
//     'X-Requested-With': 'XMLHttpRequest'
var http = require("http");
var querystring = require("querystring");
var requestData = querystring.stringify({
    content: "Scott,amazing~",
    cid: 348
});

var options = {
    hostname: "www.imooc.com",
    port: 80,
    path: "/course/docomment",
    method: "POST",
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'Connection': 'keep-alive',
        'Content-Length': requestData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'imooc_uuid=62413c8f-7af4-4864-83ef-80b23b451ecc; imooc_isnew_ct=1503407895; loginstate=1; apsid=RiZTdlZDgwMjFkMWFhMjA4NzZhZDIzNDAwZDM2YWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjIzNDQ0MQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkcmVhbXRoZW4uMDBAZ21haWwuY29tAAAAAAAAAAAAAGEzYzZmNTQ4MzBjNjkxZGUzNDE0YzJhNjJmN2MyZGNiKH6cWSh%2BnFk%3DNT; PHPSESSID=blbf4lltkk1e6p9ciimg7l0ff7; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1503407897,1504620142; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1504622323; imooc_isnew=2; cvde=59aeae6c3c18c-46',
        'Host': 'www.imooc.com',
        'Origin': 'http://www.imooc.com',
        'Referer': 'http://www.imooc.com/video/8837',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
};

var req = http.request(options, function (res) {
    console.log("statusCode:" + res.statusCode);
    console.log("headers:" + JSON.stringify(res.headers));
    res.on("data", function (data){
        console.log(Buffer.isBuffer(data));
        console.log(typeof data);
    });
    res.on("end", function(){
        console.log("评论完毕~");
    });
});

req.on("error", function (e) {
    console.log("异常:" + e.message);
});

req.write(requestData);
req.end();


