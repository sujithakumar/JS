

let a= null;
let b = 100+10;
let c = undefined;
let d = 200;

let result = a ?? b;
console.log(result); //110;

//if both side operator has values- print left hand side value
result = b ?? d;
console.log(result); //110;

//if left hand side operator is null/undefined - prints right handside operator
result = c ?? a;
console.log(result); //returns right hand side operator - here a=null;

result = a ?? c;
console.log(result); //returns right hand side operator - here c=undefined;
