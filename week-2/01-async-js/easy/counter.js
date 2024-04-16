let i = 1
let counter = ()=>{
    setTimeout(()=>{
        console.log(i++);
        counter();
    },1000);
    
}
    
counter();

// let counterInterval = (i) => {
//     let j = 1;
//     setInterval(()=>{
//         if (j>i) return;
//         console.log(j++);
//     },1000)
// }

// counterInterval(12);