// *String Manipulation:*

// Write a function that takes a string and returns the reversed version of it.

const str = "sachin";

const reverseString = (str) => {
	let ans = "";

	for (let i = str.length; i >= 0; i--) {
		ans += str.charAt(i);
	}

	return ans;
};

console.log(reverseString(str));

// Approach 2 - Using .reverse Function

function reverseString2(str) {
	return str.split("").reverse().join("");
}

console.log(reverseString2(str));
// str.reverse
