const product1 = {
  name: "Ball",
  price: 20,
};

console.log(product1); // { name: 'Ball', price: 20 }

const product2 = product1 

// !!!!!  WARNING  !!!!!
console.log(product1 === product2);  // true

console.log(product1); // { name: 'Ball', price: 20 }
console.log(product2); // { name: 'Ball, price: 20 }

product2.name = 'Pen';

console.log(product2); // { name: 'Pen', price: 20 }
console.log(product1); // !!! { name: 'Pen', price: 20 } !!!

console.log(product1 === product2);  //  !!! true !!!
// !!!!!  WARNING END  !!!!!





