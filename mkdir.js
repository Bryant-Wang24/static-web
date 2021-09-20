
const fs = require('fs')

// fs.writeFile('./data/input.txt','我是node测试文件',(err)=>{
//   if (err){
//     console.log(err)
//     return
//   }
//   console.log('创建成功')
// })
// fs.appendFile('./data/input.txt','\n我是第二个测试文字',(err)=>{
//   if (err){
//     console.log(err)
//     return
//   }
//   console.log('追加成功')
// })
// fs.rmdir('./data/input.txt',(err)=>{
//   if (err){
//     console.log(err)
//     return
//   }
//   console.log('删除成功')
// })

//以流的方式读取文件
// const readStream = fs.createReadStream('./data/input.txt')
// let count = 0;
// let str = ''
// readStream.on('data',(data)=>{
//   str+=data;
//   count++;
// })
// readStream.on('end',()=>{
//   console.log(str)
//   console.log(count)
// })

//以流的方式写入文件
// let str = ''
// for (let i=1;i<=500;i++){
//   str+=`我祈祷拥有一颗透明的心灵${i}\n`
// }
// const writeStream = fs.createWriteStream('./data/output.txt')
// writeStream.write(str)
// writeStream.end()//标记文件末尾
// //监听写入完成
// writeStream.on('finish',()=>{
//   console.log('写入完成')
// })
const readStream = fs.createReadStream('./data/output.txt')
const writeStream = fs.createWriteStream('./output.txt')
readStream.pipe(writeStream)