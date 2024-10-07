
const numStr1 = '33.3AA';
const numStr2 = '33 badf';
const numStr3 = '  sdfsad 44';

const num1 = Number(numStr1);  // !!! NaN
const num2 = Number(numStr2);  // !!! NaN
const num3 = Number(numStr3);  // !!! NaN


console.log(num1, num2, num3);  // NaN NaN NaN
console.log(typeof num1, typeof num2, typeof num3);   // number number number


