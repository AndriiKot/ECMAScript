const array = [11, 22, 33, 44];

const len = array.length

// !!! NO MUTATION   !!!
for(let item of array) {
  item += item
}
console.log(array) // [11, 22, 33, 44]    !!!  NO MUTATION !!!
// !!! NO MUTATION END !!!
