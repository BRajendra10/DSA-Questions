// 5. Write a program to add an element at the end of an array.

const array = [1, 2, 3, 4, 5];
let node = 6;

array.length++;
array[array.length - 1] = node;

console.log(array);

// Alternative: Using push() method
const array2 = [1, 2, 3, 4, 5];
array2.push(6);
console.log(array2);