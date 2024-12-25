// Array Destructuring
const numbers = [1, 2, 3, 4, 5];

const num1 = numbers[0];
const num2 = numbers[1];
// console.log(num1);
// console.log(num2);

// const [n1, n2] = [1, 2, 3, 4, 5];
const [n1, n2, n3, n4, n5] = [1, 2, 3, 4, 5];
// console.log(n1);
// console.log(n2);

// convert number to array using normal function
function numbersToArrayConvert(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

// convert number to array using arrow function
const numbersToArrayConvert2 = (n1, n2) => {
    const nums = [n1, n2]
    return nums;
}
// console.log(numbersToArrayConvert2(50, 100));

const [number1, number2] = numbersToArrayConvert(10, 20);
console.log(number1);
console.log(number2);


// Object Destructuring
