 
 
 let numbers = [1,2,3,4];
 let newNumbers = numbers;

 console.log("numbers before change", numbers); //1,2,3,4

 newNumbers.push(5);

 console.log("numbers after change", numbers);//1,2,3,4,5
 console.log("newNumbers after change", newNumbers); ////1,2,3,4,5

 let numbers2 = [...numbers];
 console.log("numbers before change", numbers); //1,2,3,4,5

 numbers2.push(100);
 console.log("numbers before change", numbers); //1,2,3,4,5
 console.log("numbers2 before change", numbers2); //1,2,3,4