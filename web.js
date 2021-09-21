const http = require('http');
const router= require('./modules/router')
const  url = require('url')
http.createServer(function (request, response) {
    router.static(request,response,'static')
    const pathName = url.parse(request.url).pathname
    console.log('path',pathName)
    if (pathName==='/login'){
        response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        response.end('执行登陆')
    }else if (pathName==='/register'){
        response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        response.end('执行注册')
    }else if (pathName==='/admin'){
        response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        response.end('处理后的业务逻辑')
    }else{
        response.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
        response.end('页面不存在')
    }

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');