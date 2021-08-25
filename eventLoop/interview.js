(function(){
    var promise = interview()
    var promise2 = interview()

    promise2.then(() => {
        return 'accept'
    })

    setTimeout(() => {
        console.log(promise);
        console.log(promise2);
    }, 800)

    promise.then((res)=>{
        console.log('smile');
    }).catch((err) => {
        console.log('cry');
    })

    function interview(){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(Math.random() > 0.2){
                    resolve('success')
                } else {
                    reject(new Error('fail'))
                }
            },500)
        })
    }
})()