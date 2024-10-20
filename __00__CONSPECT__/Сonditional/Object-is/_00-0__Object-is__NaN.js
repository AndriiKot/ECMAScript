const isReallyNaN = (val) => Object.is(val, NaN);

console.log(isReallyNaN(NaN));     // true
console.log(isReallyNaN(0));       // false
console.log(isReallyNaN(1));        // false
console.log(isReallyNaN(undefined)); // false



