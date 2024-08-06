const object1  = {
  name: "pen",
  price: 20,
}

const object2  = {
  name: "ball",
  price: 50,
}

const object3  = {
  name: "cup",
  price: 30,
}

console.log(object1);  // { name: 'pen', price: 20 }
console.log(object2);  // { name: 'ball', price: 50 }
console.log(object3);  // { name: 'cup', price: 30 }

// !!! Array !!!
const array = [object1, object2, object3];

console.log(array); 
/*
[
  { name: 'pen', price: 20 },
  { name: 'ball', price: 50 },
  { name: 'cup', price: 30 }
]
*/

// !!! WARNING !!!
object1.price = '23'
console.log(object1); // { name: 'pen', price: 23 }
// !! array !!
console.log(array);
/*
[
  { name: 'pen', price: 23 },
  { name: 'ball', price: 50 },
  { name: 'cup', price: 30 }
}
*/





