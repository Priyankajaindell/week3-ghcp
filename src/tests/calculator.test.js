// calculator.test.js
// Unit tests for calculator.js
// Tests: Addition, Subtraction, Multiplication, Division, Division by zero

const assert = require('assert');
const { calculate, modulo, power, squareRoot } = require('../calculator');

describe('Calculator Basic Operations', () => {
  it('should add two numbers', () => {
    assert.strictEqual(calculate(2, 3, '+'), 5);
    assert.strictEqual(calculate(10, 5, '+'), 15);
  });

  it('should subtract two numbers', () => {
    assert.strictEqual(calculate(7, 3, '-'), 4);
    assert.strictEqual(calculate(10, 5, '-'), 5);
  });

  it('should multiply two numbers', () => {
    assert.strictEqual(calculate(4, 6, '*'), 24);
    assert.strictEqual(calculate(3, 5, '*'), 15);
  });

  it('should divide two numbers', () => {
    assert.strictEqual(calculate(8, 2, '/'), 4);
    assert.strictEqual(calculate(9, 3, '/'), 3);
  });

  it('should handle division by zero', () => {
    assert.strictEqual(calculate(5, 0, '/'), 'Error: Division by zero');
  });

  it('should handle unsupported operations', () => {
    assert.strictEqual(calculate(2, 2, 'foo'), 'Error: Unsupported operation');
  });
});

describe('Calculator Extended Operations', () => {
  it('should return modulo of two numbers', () => {
    assert.strictEqual(modulo(10, 3), 1);
    assert.strictEqual(modulo(15, 4), 3);
  });

  it('should handle modulo by zero', () => {
    assert.strictEqual(modulo(5, 0), 'Error: Modulo by zero');
  });

  it('should handle modulo with non-number inputs', () => {
    assert.strictEqual(modulo('a', 2), 'Error: Inputs must be numbers');
    assert.strictEqual(modulo(2, 'b'), 'Error: Inputs must be numbers');
  });

  it('should return power of base and exponent', () => {
    assert.strictEqual(power(2, 3), 8);
    assert.strictEqual(power(5, 0), 1);
    assert.strictEqual(power(4, 0.5), 2);
  });

  it('should handle power with non-number inputs', () => {
    assert.strictEqual(power('a', 2), 'Error: Inputs must be numbers');
    assert.strictEqual(power(2, 'b'), 'Error: Inputs must be numbers');
  });

  it('should return square root of a number', () => {
    assert.strictEqual(squareRoot(9), 3);
    assert.strictEqual(squareRoot(0), 0);
    assert.strictEqual(squareRoot(16), 4);
  });

  it('should handle square root of negative number', () => {
    assert.strictEqual(squareRoot(-4), 'Error: Square root of negative number');
  });

  it('should handle square root with non-number input', () => {
    assert.strictEqual(squareRoot('a'), 'Error: Input must be a number');
  });
});
