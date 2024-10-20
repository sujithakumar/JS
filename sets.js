

// Create a new Set
const mySet = new Set();
// Adding values to the set
mySet.add(1);
mySet.add(2);
mySet.add(2);  // Duplicate value, won't be added
console.log(mySet); // Output: Set { 1, 2 }

//operations
const newSet = new Set([1, 2, 3, 4, 2, 4, 1, 3, 5]);
console.log(newSet);
console.log(newSet.size);
console.log(newSet.add(3));//already present - wont be added
console.log(newSet.add(30));//will be added
console.log(newSet.has(10));
console.log(newSet.has(1));
console.log(newSet.entries());
console.log(newSet.delete(4)) // deleting value - not index
console.log(newSet);
console.log(newSet.clear());
console.log(newSet);


//iterate over sets 
for (let a of mySet) {
    console.log(a);
}

newSet.forEach(x => {
    console.log(x);
})