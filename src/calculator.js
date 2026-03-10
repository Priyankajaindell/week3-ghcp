// calculator.js
// Node.js CLI Calculator
// Supports: Addition, Subtraction, Multiplication, Division

const readline = require('readline');
// Export calculate for testing
module.exports = { calculate };

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
    default:
      return 'Error: Unsupported operation';
  }
}

rl.question('Enter calculation (e.g. 2 + 3): ', (input) => {
  const match = input.match(/\s*(\d+)\s*([+\-*/])\s*(\d+)\s*/);
  if (!match) {
    console.log('Invalid input format. Please use: number operator number');
    rl.close();
    return;
  }
  const a = parseFloat(match[1]);
  const op = match[2];
  const b = parseFloat(match[3]);
  const result = calculate(a, b, op);
  console.log(`Result: ${result}`);
  rl.close();
});
