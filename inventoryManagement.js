// Write your code here
const products = ["Laptop", "Phone", "Headphone","Monitor"];

function logFirstProduct () {
  console.log("Laptop");

}
logFirstProduct()

function addProduct (newProduct){
    products.push(newProduct);
}
addProduct("Tablet");
console.log(products);

function updateProductName (position, newName) {
  products[position] = newName;
}

updateProductName(1, "Smartphone")
console.log(products);
function removeLastProduct () {
  products.pop();
}

console.log(products);
// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
