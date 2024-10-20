var outerFunction = function() {
    const outerVariable = 'I am from the outer scope!';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer function
    }

    return innerFunction; // Returning the inner function
}

const closureFunction = outerFunction(); // outerFunction is called
closureFunction(); // Calls the inner function, logging the outer variable
