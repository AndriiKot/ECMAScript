const product = {
  name: "ball",
  price: 200,
};

// !!! WARNING MUTATION !!!
console.log(product);  // { name: 'ball', price: 200 }

delete product['price']

console.log(product); // { name: 'ball' }
// !!! WARNING MUTATION END !!!


