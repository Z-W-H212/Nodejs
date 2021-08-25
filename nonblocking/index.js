// glob可以将文件和文件名递归的获取到
const glob = require('glob');

var result = null
console.time('glob')
result = glob.sync(__dirname + '/**/*')
console.timeEnd('glob')
console.log(result);

