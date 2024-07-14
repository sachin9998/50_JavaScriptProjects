// Create a program that checks if a given year is a leap year.

const isLeapYear = (year) => {
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		return true;
	}
	return false;
};

console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2002)); // false
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2008)); // true
