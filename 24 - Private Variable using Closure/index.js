// Implement a private variable using closures

function createCounter() {
  // Private variable

  let count = 0;

  function increment() {
    count++;
    console.log("Count:: ", count);
  }

  return {
    incrementCounter: function () {
      increment();
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
// console.log(counter.getCount());
console.log(counter.incrementCounter());
console.log(counter.getCount());
console.log(counter.incrementCounter());
