Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


//solution

setInterval(function(){
  let h=new Date().getHours()
  let m=new Date().getMinutes()
  let s=new Date().getSeconds()
  console.log(h +":"+m+":"+s);
  if(h>=12)
    {
        h=h-12;
        console.log(h +":"+m+":"+s +" PM");
    }else
    console.log(h +":"+m+":"+s +" AM");    
},1000)