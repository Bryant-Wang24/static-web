const fs = require('fs')
exports.getFileType = (extname)=>{
    let data = fs.readFileSync('./data/mine.json')
    let mineObj = JSON.parse(data.toString())
    return mineObj[extname]
}