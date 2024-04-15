/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // sort array in ascending order
    let sortedArr = numbers.sort((a, b) => a - b);

    // poped out the last element of the array(which is biggest element)
    let biggestElement = sortedArr.pop();

    return biggestElement;

    // if(numbers.length = 0) {
    // return undefined;
    // }
    // //declare the biggest element
    // let biggestElement = 0;

    // // check for biggest element in array
    // for(let i = 0; i <= numbers.length; i++) {
    // if(biggestElement <= numbers[i]) {
    // biggestElement = numbers[i]
    // }
    // }
    // return biggestElement;
}

module.exports = findLargestElement;