const http = require('http');
const router= require('./module/router')
const  url = require('url')
const ejs = require('ejs')
http.createServer(function (request, response) {
    router.static(request,response,'static')
    let pathName = url.parse(request.url).pathname
    console.log('path',pathName)
    console.log('请求方法',request.method)
    if (pathName==='/news'){
        response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        response.end('哈哈哈')
    } else if (pathName==='/login'){
        ejs.renderFile("./views/form.ejs",{},(err,data)=>{
            response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
            response.end(data)
        })
    }else if (pathName==='/doLogin'){
        //获取post传值
        let postData = ''
        request.on('data',(chunk)=>{
            postData+=chunk
        })
        request.on('end',()=>{
            console.log('POST数据',postData)
            response.end(postData)
        })

    } else if (pathName==='/register'){
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