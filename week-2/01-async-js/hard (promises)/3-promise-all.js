/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

// Important note :-> Promise.all ek bahut hi powerful method hai
 //  jo ek array of promises ko lekar kaam karta hai. 
// Yeh tab kaam aata hai jab aap multiple asynchronous tasks ko run karna chahte
// hain aur unke results ka wait karna chahte hain.


// let promise1 = new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Promise 1 resolved');
//     }, 3000);
//   });
  
//   let promise2 = new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Promise 2 resolved');
//     }, 2000);
//   });
  
//   let promise3 = new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Promise 3 resolved');
//     }, 1000);
//   });
  
//   Promise.all([promise1, promise2, promise3])
//     .then(values => {
//       console.log(values); // Output: ['Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved']
//     });
  
// Ismein humne Promise.all ka use kiya hai jisse humne teen alag promises ko ek 
// saath run kiya aur unke results ka wait kiya. Jab sabhi promises resolve ho jaate hain,
// tab then block execute hota hai jisme hum unke values ko access kar sakte hain.


function wait1(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
    // we have to return total time also
    const startTime = Date.now();

    return  Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(()=>{
        const endTime = Date.now();
            return endTime - startTime;
    });
}

module.exports = calculateTime;
