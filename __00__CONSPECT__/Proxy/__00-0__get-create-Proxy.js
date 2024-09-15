
const coefficients = {
  a: 1,
  c: 3,
}

const betterCoefficients = new Proxy(coefficients, {
  get(targert, key) {
    return targert[key] || 0;
  },
});


console.log(betterCoefficients.a, betterCoefficients.b, betterCoefficients.c);
