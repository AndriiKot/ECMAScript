"use strict";

const basket = [
  { name: "apple", quantity: 2 },
  { name: "banana", quantity: 0 },
  { name: "orange", quantity: 3 },
];

for (const { name, quantity } of basket) {
  console.log(`Price of ${name} is ${quantity}`);
}

