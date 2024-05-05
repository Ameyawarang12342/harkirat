## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.



const fs=require("fs");
const update="hey again";
fs.readFile("kb.txt","utf-8",function(err,data){
    fs.writeFile("kb.txt",data+update,function(err){
        if(err)
        {
             console.log("yes");
        }
    });
})