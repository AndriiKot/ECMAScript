const product = {
  name: "ball",
  price: 200,
};

const var1 = 'price'; 

// !!! WARNING MUTATION !!!
console.log(product);  // { name: 'ball', price: 200 }

delete product[var1];

console.log(product); // { name: 'ball' }
// !!! WARNING MUTATION END !!!


