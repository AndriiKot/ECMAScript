const filterArrayOdd = (arr) => {
  return arr.filter((item) => item & 1);
};

console.log(filterArrayOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  // !!!  [ 1, 3, 5, 7, 9 ]

module.exports = filterArrayOdd;

