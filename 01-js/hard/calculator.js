/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - 

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0
  }

  //add: takes a number and adds it to the result
  add(number) {
    this.result += number
  }

  //subtract: takes a number and subtracts it from the result
  subtract(number) {
    this.result-= number
  }  

  //multiply: takes a number and multiply it to the result
  multiply(number){
    this.result = this.result * number
  }

  //divide: takes a number and divide it to the result
  divide(number) {
    if(number === 0) {
      throw new Error('Number can not be 0')
    } else {
      this.result = this.result / number
    }
  }

  // mkae the result variable to 0
  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result
  }

  // calclution for multi arithmetic operations
  calculate(operation) {
    //remove extra space
    const removeExtraSpace = operation.replace(/\s+/g, '');

    // check if string is valid for operations
    const nonNumeric = /^[-+*/()\d.]+$/

    if(!nonNumeric.test(removeExtraSpace)){
      throw new Error("Invalid Expression: contains non-numerical character")
    }

    try {
      this.result = eval(removeExtraSpace)
    } catch (err) {
      throw new Error(err)
    }

    if(this.result === Infinity) {
      throw new Error('Result is Infinity')
    }


  }
}

module.exports = Calculator;
