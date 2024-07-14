// Write a function that calculates thefactorial of a given number.

function factorialIterative(n) {
	if (n < 0) {
		return undefined; // Factorial is not defined for negative numbers
	}

	let result = 1;
	for (let i = 1; i <= n; i++) {
		result *= i;
	}

	return result;
}

console.log(factorialIterative(5)); // Output: 120
console.log(factorialIterative(0)); // Output: 1
console.log(factorialIterative(10)); // Output: 3628800
