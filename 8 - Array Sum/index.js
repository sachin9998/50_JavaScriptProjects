// Find the sum of all elements in an array.

const arr = [1, 3, 4, 5, 5];

const sum = (arr) => {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
};

console.log(sum(arr)); // 18
