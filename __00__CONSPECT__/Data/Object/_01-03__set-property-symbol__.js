const product = {};

const name = Symbol();
const price = Symbol();

product[name] = 'Ball';
product[price] = 20;

console.log(product);  // { [Symbol()]: 'Ball', [Symbol()]: 20 }


