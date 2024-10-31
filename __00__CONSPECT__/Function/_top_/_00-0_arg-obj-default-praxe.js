"use strict";

function getNormalName({ name } = {}) {
  return name;
}

console.log(getNormalName({ name: "Andrii" }));   // Andrii

console.log(getNormalName());                     // undefined

console.log(getNormalName({}));                   // undefined




