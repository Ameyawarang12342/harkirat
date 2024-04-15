/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const pr = new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve()
        }, milliseconds)
    })
    return pr
}

async function haltProgram() {
    return await sleep(milliseconds)
}

module.exports = sleep;
