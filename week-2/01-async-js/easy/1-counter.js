let count = 0;

// set an interval where count increase by 1 second
const interval = setInterval(function() {

    count ++;
    console.log('Count:', count);

    // when count reaches to 10 than clear interval
    if(count == 10){
        console.log("Counter reached to 10, clear interval");
        clearInterval(interval);
    }
}, 1000);
