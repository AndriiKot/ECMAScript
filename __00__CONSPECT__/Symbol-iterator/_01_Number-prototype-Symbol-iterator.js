Number.prototype[Symbol.iterator] = function*() {
  yield "z";
  yield "d";
  yield "e";
  yield "c";
};

console.log([...3.14]);

