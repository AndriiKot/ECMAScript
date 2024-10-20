"use strict";

function getNormalName({ name } = {}) {
  if (typeof name === "string") {
    const delSpace = name.trim();
    if (delSpace) {
      const firstChr = delSpace.charAt(0);
      const otherChr = delSpace.substring(1);
      const normalFirstChr = firstChr.toUpperCase();
      const normalOtherChr = otherChr.toLowerCase();
      name = normalFirstChr + normalOtherChr;
    } else {
      name = "";
    }
  }
  return name;
}

console.log(getNormalName({ name: "  AnDrii " }));
