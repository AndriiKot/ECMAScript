const product = {
  name: "ball",
  price: 200,
};


Object.freeze(product);

// !!! WARNING MUTATION !!!
// !!!  return false !!!

console.log(product);  // { name: 'ball', price: 200 }

const newObject = (delete product['price']);

console.log(newObject); //  !!! false !!!!
console.log(product); // { name: 'ball', price: 200 } 

// !!! return false !!!
// !!! WARNING MUTATION END !!!




