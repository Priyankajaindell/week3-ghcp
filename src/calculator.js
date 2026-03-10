// calculator.js
// Node.js CLI Calculator
// Supports: Addition, Subtraction, Multiplication, Division, Modulo, Exponentiation, Square Root
// Additional functions: modulo(a, b), power(base, exponent), squareRoot(n)

const readline = require('readline');
// Export calculate and new functions for testing
module.exports = { calculate, modulo, power, squareRoot };

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(a, b, op) {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        return 'Error: Division by zero';
      }
      return a / b;
    case '%':
      if (b === 0) {
        return 'Error: Modulo by zero';
      }
      return a % b;
    case '^':
      return Math.pow(a, b);
    case 'sqrt':
      if (a < 0) {
        return 'Error: Square root of negative number';
      }
      return Math.sqrt(a);
    default:
      return 'Error: Unsupported operation';
  }
}

// Returns the remainder of a divided by b
function modulo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Inputs must be numbers';
  }
  if (b === 0) {
    return 'Error: Modulo by zero';
  }
  return a % b;
}

// Returns base raised to the exponent
function power(base, exponent) {
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    return 'Error: Inputs must be numbers';
  }
  return Math.pow(base, exponent);
}

// Returns the square root of n with error handling for negative numbers
function squareRoot(n) {
  if (typeof n !== 'number') {
    return 'Error: Input must be a number';
  }
  if (n < 0) {
    return 'Error: Square root of negative number';
  }
  return Math.sqrt(n);
}

rl.question('Enter calculation (e.g. 2 + 3): ', (input) => {
  // Accepts: number operator number OR operator number (for sqrt)
  let a, b, op, result;
  let match = input.match(/\s*(\d+)\s*([+\-*/%^])\s*(\d+)\s*/);
  if (match) {
    a = parseFloat(match[1]);
    op = match[2];
    b = parseFloat(match[3]);
    result = calculate(a, b, op);
  } else {
    match = input.match(/\s*(sqrt)\s*(\d+)\s*/);
    if (match) {
      op = match[1];
      a = parseFloat(match[2]);
      result = calculate(a, null, op);
    } else {
      console.log('Invalid input format. Please use: number operator number or sqrt number');
      rl.close();
      return;
    }
  }
  console.log(`Result: ${result}`);
  rl.close();
});
