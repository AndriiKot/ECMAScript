"use strict";

const basket = [
  { name: "apple" },
  { name: "banana" },
  { name: "orange" },
];

for (const { name } of basket) {
  console.log(`Name: ${name}`);
}


// Name: apple
// Name: banan
// Name: orange

