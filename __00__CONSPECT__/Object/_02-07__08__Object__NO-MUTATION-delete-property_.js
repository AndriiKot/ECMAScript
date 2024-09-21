const product = {
  name: "ball",
  price: 200,
};


// !!! NO MUTATION !!!
let { price, ...newObjectProduct } = product;

console.log(product);          // { name: 'ball', price: 200 }
console.log(newObjectProduct); // { name: 'ball' }
console.log(price)             // 200

price = 300;

console.log('\n',price);       // 300
console.log(product);          // { name: 'ball', price: 200 }
console.log(newObjectProduct); // { name: 'ball' }

// !!! NO MUTATION END !!!



