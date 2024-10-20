"use strict";

function getNormalName({ name }) {
  const delSpace = name.trim();
  if (delSpace) {
    const firstChr = delSpace.charAt(0);
    const otherChr = delSpace.substring(1);
    const normalFirstChr = firstChr.toUpperCase();
    const normalOtherChr = otherChr.toLowerCase();
    name = normalFirstChr + normalOtherChr;
  }
  return name;
}

console.log(getNormalName({ name: "  AnDrii " }));
