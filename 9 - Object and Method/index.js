// Create an object representing a car with properties like make, model, and year.

// Add a method to the car object to start the engine.

const car = {
	make: "Hyundai",
	model: "Aura S CNG",
	year: 2021,

	start: function () {
		console.log(`${this.make} ${this.model} is Started!!!`);
	},
};

console.log(car.make);
console.log(car.model);
console.log(car.year);
car.start();
