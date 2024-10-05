const product = {
  name: "ball",
  price: 200,
};


// !!! WARNING MUTATION !!!
// !!!  return true !!!
console.log(product);  // { name: 'ball', price: 200 }

const newObject = (delete product['price']);

console.log(newObject); //  !!! true !!!!
console.log(product); // !!! { name: 'ball' }  !!!

// !!! return true !!!
// !!! WARNING MUTATION END !!!




