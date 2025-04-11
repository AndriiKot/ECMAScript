Number.prototype[Symbol.iterator] = function* () {
  var KEY_TO_VAL = {
    3: 'z',
    '.': 'd',
    1: 'e',
    4: 'c',
  };
  var str = this.toString();
  for (var k of str) {
    yield KEY_TO_VAL[k];
  }
};

console.log([...3.14]);
