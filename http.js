// 引入http模块
const http = require('http');
const xx = require('./url')
// request 获取客户端传过来的信息；response给浏览器响应信息
http.createServer(function (request, response) {
    // console.log(request.url);//request.url获取URL
    if (request.url!=='/favicon.ico'){
        const api = 'http://www.itying.com?name=zhangsan&age=20';
        const url = new URL(api)
        console.log(url.searchParams.get('name'),url.searchParams.get('age'))
        // console.log(`名字:${url.search.name,年龄:${url.search.}}`)
    }
    // 设置响应头，状态码是200，文件类型是html，字符集是utf-8
    const output = xx.add('天涯共此时')
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    // 给页面输出一句话，结束响应
    response.end(output);
}).listen(8081);//端口
