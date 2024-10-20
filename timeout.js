
var add = function(a,b){
    console.log("adding...");
    return a+b;
}

console.log("Start");

setTimeout(()=>{
    console.log("I will be called after 5 seconds");
    console.log(add(2,3));
},5000);

console.log("End");

const timeoutId = setTimeout(() => {
    console.log("This will not execute");
  }, 1000);
  
  // Cancel the timeout before it executes
clearTimeout(timeoutId);

