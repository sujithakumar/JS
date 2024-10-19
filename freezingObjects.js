

var freezeObj = function(){
    let car = { brand: "Toyota", model: "Camry" };
    
    Object.freeze(car);

    car.model = "Corolla";  // This won't change the model property
    console.log(car.model);  // Output: "Camry"
    let car2 = car;
    car2.model = 'Sample';
    console.log(car2.model);// This won't change the model property
    console.log(car.model);// Output: "Camry"
}

freezeObj();