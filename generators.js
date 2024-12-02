function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
    return "Done!";
  }
  
  // Using the generator
  const gen = numberGenerator();
  
  console.log(gen);
  console.log(gen.next()); // Output : { value: 1, done: false }
  console.log(gen.next()); // Output : { value: 2, done: false }
  console.log(gen.next()); // Output : { value: 3, done: false }
  console.log(gen.next()); // Output : { value: "Done!", done: true }
  