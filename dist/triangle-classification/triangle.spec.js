"use strict";var _invalidtriangle = require('./invalid-triangle');
var _triangle = require('./triangle');

describe('triangle class', () => {
  test('should throw error for invalid triangle with side <= 0', () => {
    expect(() => {
      const t1 = new (0, _triangle.Triangle)(-4, -4, -3)
      console.log(t1)
    }).toThrow(new (0, _invalidtriangle.InvalidTriangle)('Invalid triangle.'))
  })

  test('should throw error for invalid triangle with one side larger than the sum of the other two', () => {
    expect(() => {
      const t1 = new (0, _triangle.Triangle)(11, 5, 5)
      console.log(t1)
    }).toThrow(new (0, _invalidtriangle.InvalidTriangle)('Invalid triangle.'))
  })

  test('should correctly classify an equilateral triangle', () => {
    const t1 = new (0, _triangle.Triangle)(10, 10, 10)
    const ret = t1.classify()
    expect(ret).toEqual(_triangle.TriangleType.EQUILATERAL)
  })

  test('should correctly classify an isosceles triangle', () => {
    const t1 = new (0, _triangle.Triangle)(10, 3, 10)
    const ret = t1.classify()
    expect(ret).toEqual(_triangle.TriangleType.ISOSCELES)
  })

  test('should correctly classify an scalene triangle', () => {
    const t1 = new (0, _triangle.Triangle)(8, 3, 10)
    const ret = t1.classify()
    expect(ret).toEqual(_triangle.TriangleType.SCALENE)
  })
})
