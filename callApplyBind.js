function greet(greeting) {
    console.log(`${greeting}, I am ${this.name}`);
}

function introduce(firstName, lastName) {
    console.log(`Hello, I am ${firstName} ${lastName}`);
}

function greet(greeting) {
    console.log(`${greeting}, I am ${this.name}`);
}


const person = { name: "Alice" };
greet.call(person, "Hello"); // Output: "Hello, I am Alice"

introduce.apply(null, ['John', 'Doe']); // Output: "Hello, I am John Doe"

const greetPerson = greet.bind(person, "Hi");
greetPerson(); // Output: "Hi, I am Bob"