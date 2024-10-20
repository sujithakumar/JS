
console.log("Traditional for loop");
let products = [100, 200, 300];
for (let i = 0; i < products.length; i++) {
    console.log("printing index ",i);
    console.log("printing value products[i] ",products[i]);
}

console.log("                                                              ");

console.log("for..of");
let colors = ['red', 'green', 'blue'];
for (const color of colors) {
    console.log(color); 
}

console.log("                                                              ");
console.log("for...in");
const user = { name: 'John', age: 30, city: 'New York' };
for (const key in user) {
    console.log(`${key}: ${user[key]}`);  // Outputs each property name and value
}

console.log("                                                              ");
console.log("forEach");
let numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num));  // Outputs each number
console.log("forEach indexing");
numbers.forEach((num,index)=>{
    console.log("The number : ", num, "is @ index: ",index)
})
