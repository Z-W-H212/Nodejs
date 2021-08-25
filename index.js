const game = require('./lib')

var playerAction = process.argv[process.argv.length - 1];


let count = 0
// 调用进程输入
process.stdin.on('data', e => {
    const playerAction = e.toString().trim()
    const result = game(playerAction)

    if(result === 1){
        count++
    }

    if(count === 3){
        console.log('你已赢了三次，我退出');
        // 推出进程
        process.exit()
    }
})
