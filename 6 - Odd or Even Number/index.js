// Write a function that checks if a number is even or odd and returns "Even" or "Odd" accordingly.

const num = 10;
const num2 = 3;

function checkNum(num) {
	if (num % 2 === 0) {
		return "Even";
	}

	return "Odd";
}

console.log(checkNum(num));
console.log(checkNum(num2));
