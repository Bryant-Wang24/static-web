const http = require('http');
const fs = require('fs')
const path = require('path')
const xx= require('./modules/xx')
http.createServer(function (request, response) {
    // response.writeHead(200, { 'Content-Type': 'text/plain' });

    let pathName = request.url
    pathName = pathName === '/' ? '/index.html' : pathName
    const curName = path.extname(pathName)//获取url的后缀来判断文件类型
    console.log(curName)
    if (pathName !== '/favicon.ico') {
        fs.readFile('./statics' + pathName, (err, data) => {
            if (err) {
                console.log(err)
                response.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
                response.end('页面不存在')
            }
            const mine = xx.getFileType(curName)
            response.writeHead(200, { 'Content-Type': `${mine}` });
            response.end(data);
        })
    }

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');