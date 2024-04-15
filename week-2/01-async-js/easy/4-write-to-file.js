const {readFile, writeFile} = require('fs/promises');

async function read() {
    try{
        const data1 = await readFile('./content/first.txt', 'utf8')
        const first = data1;

        const data2 = await readFile('./content/second.txt', 'utf8')
        const second = data2;

        await writeFile(
            './content/write.txt',
            `Here is the result: ${first}, ${second}`
        )
    }
    catch (err) {
        console.log(err)
    }
}

read()
.then(res => console.log(res))
.catch(err => console.log(err))
