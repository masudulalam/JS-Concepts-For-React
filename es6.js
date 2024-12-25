/**
 * 
 * 1. Template String.
 * 2. Arrow Function.
 * 3. Spread Operator.
 * 
 */


// Spread Operator
const numbers = [1, 2, 3, 4, 5];

const newNumbers = [...numbers];
console.log(newNumbers);

// create a new array from an older array and add an element
const currentNumbers = [...numbers, 11];

numbers.push(6);
numbers.push(7);
numbers.push(8);
numbers.push(9);
numbers.push(10);
console.log(newNumbers);
console.log(currentNumbers);
console.log(numbers);
