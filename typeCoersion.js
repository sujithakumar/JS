
//automatic type conversion done by js
console.log(1 + '1');
console.log('2' + 1);
console.log('2' + '2');

//treats everything as string
console.log('2' + '2' + 2 + 3 + '4' + 5);

//treats everything as string
console.log(2 + '3' + 4 + 5);

//treats first 2 as numbers
console.log(2 + 3 + '5' + 7);

//null is ignored
console.log(2+null+3)

//treats null as string
console.log('2'+null+3);

//a number + undefined = nan
console.log(2+undefined+'3'+3)

//a string + undefined - treats everthing as a string
console.log('2'+undefined+3+5)