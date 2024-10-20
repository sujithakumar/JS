
let numbers = [1, 2, 3, 4, 5, 6];

numbers.length;
console.log(numbers);
numbers.push(10);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.unshift(1);
console.log(numbers);
numbers.unshift(0);
console.log(numbers);

//operations
numbers.slice(2, 5);
console.log(numbers);
numbers.splice(1, 3);
console.log(numbers);

//iterations
numbers.forEach((ele, index) => {
    console.log(index, "ForEach");
});

let ret = numbers.some(x => x % 2 == 0);
console.log(ret);

let ret1 = numbers.every(x => x % 2 == 0);
console.log(ret1);

//find

let ret2 = numbers.find(x => x > 0); //closest value possible
console.log(ret2);

let ret3 = numbers.find(x => x > 4); //closest value possible
console.log(ret3);

//reduce
let ret4 = numbers.reduce((x, y) => x + y);
console.log(ret4);

let ret5 = numbers.reduce((x, y) => x * y);
console.log(numbers);
console.log(ret5);

//map & filter 
let out = numbers.map(x => x + 1);
console.log(numbers);
console.log(out);

let filt = numbers.filter(x => x % 2 == 0);
console.log(numbers);
console.log(filt);

//flatten array 
let newAr = [1, 2, 3, 4, [5, 6], [8, 9], [10, [11, 12], 13]];
let op = newAr.flat(1);
console.log(op);

let op1 = newAr.flat(2);
console.log(op1);


let op3 = newAr.flat();
console.log(op3);

let op4 = [...newAr];
console.log(op4)

let out1 = numbers.map(x => x = x + 2);
console.log(out1);

let arrayNew = [1, 2, 4, 5, 2, 4, 5];
console.log(arrayNew); //accepts duplicate values