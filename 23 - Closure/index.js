// counter function using closures that increments

function createCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

let counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());

// console.log(createCounter());
// console.log(createCounter());
