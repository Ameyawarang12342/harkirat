const { log } = require("console");
const fs = require("fs");

//first read the file 1-file-cleaner

let data_file ;

const read_file = fs.readFileSync('./read.md' , 'utf8' , function(err ,data){
    if(err) console.log(err);
    data_file = data;

})

//console.log(read_file);

// To remove extraspace

// \s: matches any whitespace symbol: spaces, tabs, and line breaks
// +: match one or more of the preceding tokens (referencing \s)
// g: the g at the end indicates iterative searching throughout the full string



function removeExtraSpace(str){
    return str.replace(/\s+/g, ' ').trim();
}
let res = removeExtraSpace(read_file);
//write in file

fs.writeFileSync("./read.md" , res , (err) =>{
    if(err) console.log(err);
})
