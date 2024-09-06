const product = {
  name: ["ball","pen"],
  price: 200,
};

const { name: name1 } = product; // ["ball", "pen"]
const { name: name2 } = product; // ["bal", "pen"]

console.log(name1 === name2) // !!! true !!!
name1.pop()

console.log(name1, name2); // ["ball"] ["bal"]


// !!! MUTATION !!!
console.log(product)
// { name: ["ball"], price: 200 } !!! MUTATION !!!
// !!! MUTATION !!!









