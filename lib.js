module.exports = function (playerAction){
    console.log('您出了'+ playerAction)
    var random = Math.random() * 3

    if (random < 1){
        var computerAction =  'rock'
    } else if(random > 2){
        var computerAction =  'sesscior'
    } else {
        var computerAction =  'paper'
    }
    
    if ( playerAction === computerAction){
        console.log('平局');
        return 0
    } else if(
        (computerAction === 'rock' && playerAction === 'paper') || 
        (computerAction === 'sesscior' && playerAction === 'rock') || 
        (computerAction === 'paper' && playerAction === 'sesscior')
    ){
        console.log('您赢了');
        return 1
    } else {
        console.log('您输了');
        return -1
    }
}
