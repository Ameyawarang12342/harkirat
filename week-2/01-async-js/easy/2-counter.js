function interval(count, maxCount) {
    return new Promise((resolve, reject) => {
        console.log('Count:', count);

        // increase counter by 1 second
        setTimeout(function(){
            count ++;

            if(count <= maxCount) {
                resolve(interval(count, maxCount))
            } else {
                resolve('Counter reaches' + ' ' + maxCount)
            }
        }, 1000)
    })
};

interval(0, 10)
.then(result => console.log(result))
.catch(error => console.log(error))