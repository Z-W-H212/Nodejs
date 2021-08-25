const eventloop = {
    queue : [],
    loop() {
        while(this.queue.length){
            var callback = this.queue.shift()
            callback()
        }

        setTimeout(this.loop.bind(this),50)
    },
    
    add(callback){
        this.queue.push(callback)
    }
}

// 时间循环基本例子
eventloop.loop()

setTimeout(()=>{
    eventloop.add(function(){
        console.log(1);
    })
},500)

setTimeout(()=>{
    eventloop.add(function(){
        console.log(2);
    })
},500)