const path = require('path');
const fs = require('fs');
const { log, error } = require('console');

const filePath = path.resolve(__dirname, '3-read-from-file.md');
const data = fs.readFileSync(filePath, 'utf-8');

fs.writeFileSync("./readme.txt", data,'utf-8' ,(err)=>{
    console.log(err);
})

