const http = require('http');
const router= require('./module/router')
const  url = require('url')
const ejs = require('ejs')
http.createServer(function (request, response) {
    router.static(request,response,'static')
    const pathName = url.parse(request.url).pathname
    if (pathName==='/login'){
        let msg = "数据库里面获取的数据"
        let list = [
            {title:1},
            {title:2},
            {title:3},
            {title:4},
            {title:5}
        ]
        ejs.renderFile('./views/login.ejs', {msg,list}, (err, data)=>{
            response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
            response.end(data)
        });
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