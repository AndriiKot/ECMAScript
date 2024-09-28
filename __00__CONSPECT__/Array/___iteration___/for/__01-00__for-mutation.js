const array = [11, 22, 33, 44];

const len = array.length

// !!! WARNING !!! // MUTATION
for(let i = 0; i < len; i++) {
 array[i] = array[i] + 1   
}

console.log(array) // [ 12, 23, 34, 45 ]    !!! MUTATION !!!
// !!! WARNING END !!!
