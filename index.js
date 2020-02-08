console.log('Test Promises')


var status= function(iter){
    console.log('Opening Status - iter: '.concat(iter))
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            getStatus(iter).then(function(getStatusReturn){
                console.log(getStatusReturn)
                if (iter<5) {
                    resolve(status(iter+1))
                } else
                 {
                     resolve('Solved')
                 }
            })

        },
        1000)
    })
}




var getStatus=function(iter){
    console.log('Opening getStatus - iter: '.concat(iter))
    return new Promise(function(resolve,reject){
        setTimeout(resolve('Return get Status - iter :'.concat(iter)),500)
    })
}

status(0)