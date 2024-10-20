"use strict";

const Point = class {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const p1 = new Point(1, 2);

console.log(p1);  // Point { x: 1, y: 2 }

