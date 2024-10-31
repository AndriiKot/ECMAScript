const filterArrayEven = (arr) => {
  return arr.filter((item) => !(item & 1));
};

console.log(filterArrayEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  // !!!  [ 2, 4, 6, 8, 10 ]

module.exports = filterArrayEven;

