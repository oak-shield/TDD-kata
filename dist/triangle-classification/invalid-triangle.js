"use strict";Object.defineProperty(exports, "__esModule", {value: true}); class InvalidTriangle extends Error {
  constructor (message) {
    super(message)
    this.name = 'InvalidTriangle'
  }
} exports.InvalidTriangle = InvalidTriangle;
