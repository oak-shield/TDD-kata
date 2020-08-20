"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _invalidtriangle = require('./invalid-triangle');

var TriangleType; (function (TriangleType) {
  const EQUILATERAL = 1; TriangleType[TriangleType["EQUILATERAL"] = EQUILATERAL] = "EQUILATERAL";
  const SCALENE = EQUILATERAL + 1; TriangleType[TriangleType["SCALENE"] = SCALENE] = "SCALENE";
  const ISOSCELES = SCALENE + 1; TriangleType[TriangleType["ISOSCELES"] = ISOSCELES] = "ISOSCELES";
})(TriangleType || (exports.TriangleType = TriangleType = {}));

 class Triangle {
  
  
  

  constructor (sideA, sideB, sideC) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0 ||
        sideA >= sideB + sideC ||
        sideB >= sideC + sideA ||
        sideC >= sideA + sideB) {
      throw new (0, _invalidtriangle.InvalidTriangle)('Invalid triangle.')
    }
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
  }

  classify () {
    if (this.sideA === this.sideB && this.sideB === this.sideC) {
      return TriangleType.EQUILATERAL
    }
    if (this.sideA !== this.sideB && this.sideB !== this.sideC &&
        this.sideA !== this.sideC) {
      return TriangleType.SCALENE
    }
    return TriangleType.ISOSCELES
  }
} exports.Triangle = Triangle;
