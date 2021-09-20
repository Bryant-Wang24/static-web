// 两种导出方式

//第一种
const f ={
  add(a){
    return '海上生明月' +a
  }

}
module.exports = f

// 第二种
exports.add = (a)=>{
  return '海明月' +a
}