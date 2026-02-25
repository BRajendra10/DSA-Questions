// 4. Write a program to access the last element of an array.

const array = [1, 2, 3, 4, 5];
console.log(array[array.length - 1]);

// Alternative: Using .at() method (ES2022)
console.log(array.at(-1));