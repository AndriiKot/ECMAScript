let price1 = 200;
let price2 = price1;


//!!! WARNING !!!
console.log(price1 === price2);   // true


price1 = 300;
console.log(price1, price2);      // 300 200

console.log(price1 === price2)    // !!! false !!!
// !!! WARNING END !!!
