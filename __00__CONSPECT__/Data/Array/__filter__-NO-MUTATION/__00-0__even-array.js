
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenArr = arr.filter((num) => !(num & 1)); // [2, 4, 6, 8, 10]

console.log(evenArr);
