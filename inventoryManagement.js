// Write your code here
// Task 2
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Task 3
function logFirstProduct() {
    console.log(products[0]);
}

// Task 4
function addProduct(productName) {
    products.push(productName);
}

// Task 5
function updateProductName(position, newName) {
    products[position] = newName;
}

// Task 6
function removeLastProduct() {
    products.pop();
}



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
