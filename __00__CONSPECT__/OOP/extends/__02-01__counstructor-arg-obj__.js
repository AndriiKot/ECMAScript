"use strict";

const Point = class {
  constructor({ x, y }) {
    this.x = x;
    this.y = y;
  }
}

const p1 = new Point({ y: 2, x: 1 });

console.log(p1);  // Point { x: 1, y: 2 }

