## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

// solution

const fs=require("fs")
fs.readFile("aa.txt","utf-8",function(err,data){
    data=data.trim();
  data= data.replace(/\s +/g, ' ').trim();
   fs.writeFile("aa.txt",data,function(err){
     if(err){
        console.error("error occured " + err)
     }
     else
      console.log("successful")
   })
})