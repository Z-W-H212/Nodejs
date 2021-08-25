console.log('start require');
var lib = require('./lib');
console.log('end require', lib);

lib.addAction = 'test'
console.log(lib);