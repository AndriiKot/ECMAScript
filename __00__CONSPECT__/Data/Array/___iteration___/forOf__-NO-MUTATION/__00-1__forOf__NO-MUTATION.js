const array = [11, 22, 33, 44];


// !!! NO MUTATION   !!!
for(let item of array) {
  item += 1
  console.log(item)
}

// 12
// 23
// 34
// 45

console.log(array) // [11, 22, 33, 44]    !!!  NO MUTATION !!!
// !!! NO MUTATION END !!!


/*
for(const item of array) {
  item += 1     !!! ERROR !!!
}
*/
