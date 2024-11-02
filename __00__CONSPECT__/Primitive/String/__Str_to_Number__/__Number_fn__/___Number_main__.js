
const numStr = '33.3';
const numStrNotValid = '33.3abc'
const numUndefined = undefined;
const numNull = null;
const numFalse = false;
const numEmptyStr = '';

const num_1 = Number(numStr);           // 33.3
const num_2 = Number(numStrNotValid);  // NaN
const num_3 = Number(numUndefined);   // NaN
const num_4 = Number(numNull);        // 0
const num_5 = Number(numFalse);       // 0
const num_6 = Number(numEmptyStr);    // 0



console.log(num_1, num_2, num_3, num_4, num_5, num_6) 
// 33.3 NaN NaN 0 0 0


