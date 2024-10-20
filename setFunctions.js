const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

let union = new Set([...setA,...setB]);
console.log("remove duplicates: ",union);

let intersection = new Set([...setA].filter(x => setB.has(x)));
console.log("common value: ",intersection);

let difference = new Set([...setA].filter(x => !setB.has(x)));
console.log("different value: ",difference);

//remove duplicates from Array
let arr = [1,2,3,4,2,4,1,3,5];
console.log(arr);
let mySet = new Set(arr);
console.log(mySet);

//convert back to arr -- will not have duplicate values
let newArr = [...mySet];
console.log(newArr);