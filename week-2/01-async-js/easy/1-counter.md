## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second



function counter()
{
   console.log(parseInt((new Date().getTime()-initialtime)/1000));
  
}
let initialtime=new Date().getTime();
setInterval(counter,1000);