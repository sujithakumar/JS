const myMap = new Map();

// Using different types of keys
myMap.set('name', 'Alice');      // String as key
myMap.set(1, 'one');             // Number as key
myMap.set(true, 'Yes');          // Boolean as key
myMap.set({ id: 1 }, 'Object');  // Object as key

// console.log(myMap);
// console.log(myMap.size);


//operations:
myMap.set('gender','female');
console.log(myMap.size);
console.log(myMap.set('mark',92));
console.log(myMap.get('gender'));
console.log(myMap.get(true));
console.log(myMap.get(1));
console.log(myMap.has(true));
console.log(myMap.delete(true));
console.log(myMap.size);
console.log(myMap.clear());
console.log(myMap.size);

//other useful functions - COMMENT THE CLEAR() CODE
console.log("KEYS");
console.log(myMap.keys());
console.log("VALUES");
console.log(myMap.values());
console.log("ENTRIES");
console.log(myMap.entries());


//iteration
for (const [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}

myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});


console.log("                                                              ");
console.log("iterating over keys:");
for (const key of myMap.keys()) {
    console.log(key);
}


console.log("                                                              ");
console.log("iterating over values:");
for (const value of myMap.values()) {
    console.log(value);
}


console.log("                                                              ");
console.log("iterating over entries:");
for (const entry of myMap.entries()) {
    console.log(entry);
}
