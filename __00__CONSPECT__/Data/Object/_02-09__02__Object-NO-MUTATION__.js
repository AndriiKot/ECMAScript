const product = {
  name: ["ball","pen"],
  price: 200,
};

const name1 = [...product.name]; // ["ball", "pen"]
const name2 = [...product.name]; // ["bal", "pen"]

console.log(name1 === name2) // !!! false !!!
name1.pop()

console.log(name1, name2); // ["ball"] ["bal", "pen"]


// !!! NO MUTATION !!!
console.log(product)
// { name: ["ball", "pen"], price: 200 } !!! NO MUTATION !!!
// !!! NO MUTATION !!!









