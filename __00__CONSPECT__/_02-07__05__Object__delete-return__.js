const product = {
  name: "ball",
  price: 200,
};


// !!! WARNING MUTATION !!!
// !!!  return true !!!
console.log(product);  // { name: 'ball', price: 200 }

const newObject = (delete product['width']);

console.log(newObject); //  !!! true !!!!
console.log(product); // { name: 'ball', price: 200 } 

// !!! return true !!!
// !!! WARNING MUTATION END !!!




