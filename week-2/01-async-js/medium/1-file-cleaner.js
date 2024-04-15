const {readFile, writeFile} = require('fs/promises');

async function removeSpace() {
    try {
        // read file
        const data = await readFile('./content/space.txt', 'utf8')

        // remove extra whitespace
        const modifiedFile = data.replace(/\s+/g, ' ');

        // write file 
        await writeFile(
            './content/modifiesFile.txt',
            modifiedFile
        )
    }
    catch(err) {
        console.log(err)
    }
}

removeSpace()
.then(res => console.log(res))
.catch(err => console.log(err));