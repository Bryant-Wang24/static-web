const fs = require('fs')
//判断所选目标是文件还是目录
fs.stat('./http.js',(err,data)=>{
  if (err){
    console.log(err)
    return
  }
  console.log(`是文件:${data.isFile()}`)
  console.log(`是目录:${data.isDirectory()}`)
})

fs.mkdir('./css',(err)=>{
  if (err){
    console.log(err)
    return
  }
  console.log('创建成功')
})

//创建写入文件，如果已存在，那么会被替换
fs.writeFile('./css/index.html','你好nodejs',(err)=>{
  if (err){
    console.log(err)
    return
  }
  console.log('创建写入文件成功')
})