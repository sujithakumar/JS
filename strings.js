
var str = " Hello World !!";

console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log("                                      ");
console.log(str.trim());
console.log(str.trimEnd());
console.log(str.trimStart());
console.log("                                      ");
console.log(str.replace("l", '##'));
console.log(str.replaceAll("l", "&&&"));
console.log("                                      ");
console.log(str.substring(2, 9));
console.log(str.indexOf('e'));
console.log(str.lastIndexOf('H'));
console.log(str.includes("hahaha"));
console.log(str.includes("Hello"));
console.log("                                      ");

console.log("                                      ");
console.log(str.slice(3, 8));
console.log(str.split(" "));
console.log(str.split(""));

console.log("                                      ");
console.log(str.repeat(2));
console.log(str.padStart(str.length + 2, '**'));
console.log(str.padEnd(str.length + 3, '&&'));

//slice and substring 
let str1 = "Scooby";

console.log(str1.slice(1, 4));
console.log(str1.substring(1, 4));

//negative input 
console.log(str1.slice(-2)); //returns value from end
console.log(str1.substring(-2)); //returns value as as such as -2 is treated as 0

//second input is greater than first 
console.log(str1.slice(4, 2));
console.log(str1.substring(4, 2));// interchanges values

//search
console.log(str1.search("by")); //return index
console.log(str1.charAt(3));
console.log(str1.includes("by")); //returns bool