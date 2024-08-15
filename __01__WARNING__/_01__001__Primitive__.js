let var1 = 11;
let var2 = var1;


console.log(var1 == var2);      // true
console.log(var1 === var2);     // true
console.log(var1, var2);        // 11 11


var1 = 22;

console.log("WARNING !!!");

// !!!  WARNING !!!
console.log(var1 == var2);      // false
console.log(var1 === var2);     // false
console.log(var1, var2);        // 22 11
// !!!  WARNING !!!
