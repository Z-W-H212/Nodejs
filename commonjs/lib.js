console.log('Hello xiaodian');

exports.hello = 'hello';
exports.add = function (a, b){
    return a + b;
}
exports.xiaodian = { hello: 'xiaodian' }

// module.exports会覆盖exports加的变量
module.exports = function minus(a, b){
    return a - b;
}

// setTimeout(()=>{
//     console.log(exports);
// },1500)

