let [var1, var2, var3, var4] = [11, 22, 33, 44];

console.log(var1, var2, var3, var4); // 11 22 33 44

const array = [var1, var2, var3, var4];

console.log(array); // [11, 22, 33, 44]

//!!! WARNING !!!

var1 = 55; // !!!
console.log(var1, var2, var3, var4); //  !!! 55 22 33 44 !!!
console.log(array); //  !!! [11, 22, 33, 44]  !!!

// !!! WARNING  END !!!
