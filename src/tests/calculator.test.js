// calculator.test.js
// Unit tests for calculator.js
// Tests: Addition, Subtraction, Multiplication, Division, Division by zero

const assert = require('assert');
const { calculate } = require('../calculator');

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
    assert.strictEqual(calculate(2, 2, '^'), 'Error: Unsupported operation');
  });
});
