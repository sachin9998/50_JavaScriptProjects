// Remove all occurrences of a specific element from an array.

function removeElement(arr, target) {
	return arr.filter((i) => i !== target);
}

let arr = [234, 20, 10, 4, 10, 34, 152, 10, 10, 32321];
let target = 10;

console.log(removeElement(arr, target));
