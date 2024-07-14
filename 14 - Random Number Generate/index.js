// Generate Random Number
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
console.log(getRandomInt(1, 10)); // Random integer between 1 and 10 (inclusive)
console.log(getRandomInt(5, 15)); // Random integer between 5 and 15 (inclusive)
console.log(getRandomInt(-10, 10)); // Random integer between -10 and 10 (inclusive)
