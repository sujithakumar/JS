
var add = function (a, b) {
    console.log("adding...");
    return a + b;
}

console.log("Start");

// setInterval(()=>{
//     console.log("I will call add function every 2 seconds");
//     console.log(add(2,3));
// },2000)

console.log("End");

const intervalId = setInterval(() => {
    console.log("This will log every second");
}, 1000);

// Cancel the interval after 5 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared after 5 Seconds");
}, 5000);