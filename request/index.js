var http = require("http");
var querystring = require("querystring");
var requestData = querystring.stringify({
    user_id: 9355612,
    resource_id: 1838,
    user_name: "Mix时代",
    category: 0,
    is_additional: 0,
    resource_title: "深入理解GIT",
    is_anonymous: 0,
    lesson_consistent: 5,
    lecturer_Interpretation: 5,
    lecturer_answer: 5,
    content: "学到很多干货"
});

var options = {
    hostname: "edu.51cto.com",
    port: 80,
    path: "/center/appraise/index/add-appraise",
    method: "POST",
    headers: {
        Accept: 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        Connection: 'keep-alive',
        'Content-Length': '302',
        'Content-Type': 'application/x-www-form-urlencoded',
        Cookie: 'www51cto=BB109CDE4D5D5EE6AAA40DAF1CF1C9DFybEM; UM_distinctid=15e3bf4a3e2b82-01c1f8e114cf15-791238-1fa400-15e3bf4a3e3ac5; _ourplusFirstTime=117-9-1-13-40-42; EDUACCOUNT=65bc063aa1e79909c7789daebb6afc340d7e9fb5859c9ab6bf3953afd7aabd22a%3A2%3A%7Bi%3A0%3Bs%3A10%3A%22EDUACCOUNT%22%3Bi%3A1%3Bs%3A32%3A%2216361b28cb3a33425f67330788310b52%22%3B%7D; Hm_lvt_110fc9b2e1cae4d110b7959ee4f27e3b=1504244442,1504592306; Hm_lpvt_110fc9b2e1cae4d110b7959ee4f27e3b=1504592306; acw_tc=AQAAANyRSEoSSQwA5B3uc93vbl7O4zw1; sBox=1; pub_sauth1=LA1BrtTRzWsKBwcEVQhUPQUGBFBTCwcCU1I; pub_sauth2=12b5c76c9d8de789878c5991ce1c4189; pub_cookietime=0; PHPSESSID=bit91jal39oifbf1k02h10ni21; _csrf=5571d12000ef6a77e11dfb040c087e791bfbf88ca40c0c26dbffc269dea92271a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%223MF7X3yDnEKHAEzp_C_U3SBdwbq6G7Sk%22%3B%7D; bdshare_firstime=1504592362794; 9355612flag=yes; _ourplusReturnCount=15; _ourplusReturnTime=117-9-5-14-19-54; Hm_lvt_8c8abdb71d78d33dfdb885e0bc71dae0=1504244443,1504592307,1504592314; Hm_lpvt_8c8abdb71d78d33dfdb885e0bc71dae0=1504592395; Cto_lvt_=1504244443,1504592307,1504592314; Cto_lpvt_=1504592395',
        Host: 'edu.51cto.com',
        Origin: 'http://edu.51cto.com',
        Referer: 'http://edu.51cto.com/course/1838.html',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
};

var req = http.request(options, function (res) {
    console.log("statusCode:" + res.statusCode);
    console.log("header:" + JSON.stringify(res.headers));
    res.on("data", function (data) {
        console.log(JSON.stringify(data));
        console.log(typeof data);
    });
    res.on("end", function () {
        console.log("评论完毕~");
    });
});

req.on("error", function (e) {
    console.log("异常:" + e.message);
});

req.write(requestData);
req.end();




