// Array Litreal
const fruits: string[] = ['apple', 'banana', 'cherry'];

// Array Constructor
const numbers: number[] = new Array(1,2,3,4,5);

// Intialize an empty Array
const emptyArray: string[] = [];

console.log(fruits[0]);
console.log(fruits[2]);

console.log(numbers[2]);
numbers[2] = 10;
console.log(numbers[2]);

numbers.push(6);
console.log(numbers[5]);

numbers.pop();
console.log(numbers[5]);

console.log(numbers[0]);
numbers.shift();
console.log(numbers[0]);

numbers.unshift(1);
console.log(numbers[0]);

const slicedArray = numbers.slice(1, 3); // Create a new Array with elements from index 1 - 2
console.log(slicedArray)

const doubledArray = numbers.map((num)=> num * 2);
console.log(doubledArray);

const filteredArray = numbers.filter((num)=> num >2);
console.log(numbers);
console.log(filteredArray);

// Read Only Arrays
const readOnlyArray: readonly number[] = [1,2,3];