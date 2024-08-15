const product = {
  name: "ball",
  price: 200,
};


// !!! NO MUTATION !!!
const { price, ...newObjectProduct } = product;

console.log(product);          // { name: 'ball', price: 200 }
console.log(newObjectProduct); // { name: 'ball' }

// !!! NO MUTATION END !!!



