const array1 = [11, 22, 33, 44];
const array2 = array1;

console.log({array1, array2}); // { array1: [ 11, 22, 33, 44 ], array2: [ 11, 22, 33, 44 ] }

// !!! WARNING !!!
console.log(array1 === array2); // !!! true !!!
// !!! WARNING !!!

