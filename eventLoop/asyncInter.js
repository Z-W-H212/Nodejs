(async function(){
    try {
        await interview(1)
        await interview(2)
        await interview(3)
    } catch (e) {
        return console.log('cry at ' + e.round + ' round');
    }
    console.log('smile');
})()
function interview(round){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(Math.random() > 0.3){
                resolve('success')
            } else {
                var error = new Error('fail')
                error.round = round
                reject(error)
            }
        },500)
    })
}