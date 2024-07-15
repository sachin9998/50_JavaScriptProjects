// Find the largest element using reduce()

function findLargestElement(arr) {
	return arr.reduce((max, curr) => {
		return curr > max ? curr : max;
	});
}

let arr = [10, 20, 30, 40, 50];

let max = findLargestElement(arr);
console.log(max);
