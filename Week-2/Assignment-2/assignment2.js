function avg(data) {
  // your code here
  let sum = data.products.reduce((sum, product) => sum + product.price, 0);
  let avg = sum / data.products.length;

  return avg;
}
console.log(
  avg({
    size: 3,
    products: [
      {
        name: "Product 1",
        price: 100,
      },
      {
        name: "Product 2",
        price: 700,
      },
      {
        name: "Product 3",
        price: 250,
      },
    ],
  })
); // should print the average price of all products
