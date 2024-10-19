
//one way is to use Object.freeze(obj);

let obj1 = {
    'name':'sujitha',
    'age':'33',
    'height':'165',
    'weight':'65',
    'mark':'100'
}

let obj2 = JSON.parse(JSON.stringify(obj1));

//try to change data 
obj2.mark = 20;

console.log("obj1.mark", obj1.mark);
console.log("obj2.mark", obj2.mark);

