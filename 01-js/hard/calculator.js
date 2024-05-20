/* Implement a class `Calculator` having below methods 
- initialise a result variable in the constructor and keep updating it after every arithmetic operation
- add: takes a number and adds it to the result
- subtract: takes a number and subtracts it from the result
- multiply: takes a number and multiply it to the result
- divide: takes a number and divide it to the result
- clear: makes the `result` variable to 0
- getResult: returns the value of `result` variable
- calculate: takes a string expression which can take multi-arithmetic operations and give its result
 example input: `10 + 2 * ( 6 - (4 + 1) / 2) + 7`

Points to Note:
1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }
 
  add(num) {
    this.result += num;
  }
 
  subtract(num) {
    this.result -= num;
  }
 
  multiply(num) {
    this.result *= num;
  }
 
  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= num;
  }
 
  clear() {
    this.result = 0;
  }
 
  getResult() {
    return this.result;
  }
 
  calculate(expression) {
    const operators = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b,
    };
 
    const isOperator = (char) => operators.hasOwnProperty(char);
    const isNumber = (char) => !isNaN(parseFloat(char)) && isFinite(char);
 
    const sanitizeExpression = (expr) => expr.replace(/\s+/g, "");
 
    const parseExpression = (expr) => {
      const sanitizedExpr = sanitizeExpression(expr);
      const stack = [];
      let currentNumber = "";
      let lastOperator = "+";
 
      for (let i = 0; i < sanitizedExpr.length; i++) {
        const char = sanitizedExpr[i];
 
        if (isNumber(char)) {
          currentNumber += char;
        } else if (isOperator(char)) {
          const num = parseFloat(currentNumber);
          if (isNaN(num) && currentNumber !== "") {
            throw new Error(`Invalid expression: ${expr}`);
          }
          if (currentNumber !== "") {
            const operation = operators[lastOperator];
            stack.push(operation(stack.pop() || 0, num));
          }
          lastOperator = char;
          currentNumber = "";
        } else {
          throw new Error(`Invalid expression: ${expr}`);
        }
      }
 
      const lastNum = parseFloat(currentNumber);
      if (isNaN(lastNum) && currentNumber !== "") {
        throw new Error(`Invalid expression: ${expr}`);
      }
      if (currentNumber !== "") {
        const operation = operators[lastOperator];
        stack.push(operation(stack.pop() || 0, lastNum));
      }
 
      return stack.pop();
    };
 
    this.result = parseExpression(expression);
    return this.result;
  }
 }

const calculator = new Calculator();

// Test add
calculator.add(5);
console.log(calculator.getResult()); // Output: 5

// Test subtract
calculator.subtract(3);
console.log(calculator.getResult()); // Output: 2

// Test multiply
calculator.multiply(4);
console.log(calculator.getResult()); // Output: 8

// Test divide
calculator.divide(2);
console.log(calculator.getResult()); // Output: 4

// Test clear
calculator.clear();
console.log(calculator.getResult()); // Output: 0

// Test calculate with simple expression
const result1 = calculator.calculate("10 + 2 * 3");
console.log(result1); // Output: 16

// Test calculate with complex expression
const result2 = calculator.calculate("10 + 2 * ( 6 - (4 + 1) / 2) + 7");
console.log(result2); // Output: 27

// Test calculate with invalid expression
try {
  calculator.calculate("5 + abc");
} catch (error) {
  console.log(error.message); // Output: Invalid expression: 5 + abc
}

try {
  calculator.divide(0);
} catch (error) {
  console.log(error.message);
}