const {readFile} = require('fs/promises');

async function read() {
    try{
        const data = await readFile('./content/file.txt', 'utf8')
        return data
    }
    catch (err) {
        console.log(err)
    }
}

read()
.then(res => console.log(res))
.catch(err => console.log(err))