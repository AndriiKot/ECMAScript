
const RED = Symbol();
const ORANGE = Symbol();

console.log(RED); // Symbol()
console.log(ORANGE); // Symbol()

// return Boolean
console.log(RED == ORANGE);  // false
console.log(RED === ORANGE); // false
// return Boolean