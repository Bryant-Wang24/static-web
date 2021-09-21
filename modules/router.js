const fs = require('fs')
const path = require('path')
const url = require('url')
const getFileType = (extname)=>{
    let data = fs.readFileSync('./data/mine.json')
    let mineObj = JSON.parse(data.toString())
    return mineObj[extname]
}

exports.static = (request,response,staticPath)=>{
    let pathName = request.url
    // let pathName = url.parse(request.url).pathname
    pathName = pathName === '/' ? '/index.html' : pathName
    const curName = path.extname(pathName)//获取url的后缀来判断文件类型
    // console.log(curName)
    if (pathName !== '/favicon.ico') {
        try {
            let data = fs.readFileSync('./'+ staticPath + pathName)
            if (data){
                const mine =getFileType(curName)
                response.writeHead(200, { 'Content-Type': `${mine};charset=utf-8'` });
                response.end(data);
            }
        }catch (e) {
            console.log(e)
        }

    }
}
