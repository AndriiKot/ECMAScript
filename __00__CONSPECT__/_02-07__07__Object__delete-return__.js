const product = {
  name: "ball",
  price: 200,
};

Object.freeze(product);

// !!! WARNING MUTATION !!!
// !!!  return true !!!
console.log(product);  // { name: 'ball', price: 200 }

const newObject = (delete product['width']);  // !!! return true !!!

console.log(newObject); //  !!! true !!!!
console.log(product); // { name: 'ball', price: 200 } 

// !!! return true !!!
// !!! WARNING MUTATION END !!!




