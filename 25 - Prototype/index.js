// Add method to Product Prototype

function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

Product.prototype.calculateTotalValue = function () {
  return this.price * this.quantity;
};

// Creating new product using new keyword
const product1 = new Product("Widget", 10, 5);

console.log(Product.prototype);

console.log(product1);

console.log(product1.calculateTotalValue());
