
var typeofFun = function (inp) {
    return typeof (inp);
}

console.log(typeofFun("a")); //string
console.log(typeofFun("a+b")); //string
console.log(typeofFun('aa')); //string
console.log(typeofFun(2)); //number
console.log(typeofFun('2+3')); //string
console.log(typeofFun(2 + '2')); //string
console.log(typeofFun('2' + 2));//string
console.log(typeofFun(2.0)); //number
console.log(typeofFun(undefined)); //undefined
console.log(typeofFun(null)); //object
console.log(typeofFun(new Object())); //object
console.log(typeofFun([])); //object
console.log(typeofFun(['a'])); //object
console.log(typeofFun(typeofFun(1))); //string
console.log(typeofFun(typeofFun('1'))); //string
console.log(typeofFun(true)); //boolean
console.log(typeofFun(NaN)); //number