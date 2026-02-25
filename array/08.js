// 8. Write a program to remove the first element of an array.

let array = [1, 2, 3, 4, 5];

for(let i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
}

array.length--;

console.log(array);

// Alternative: Using shift() method
const array2 = [1, 2, 3, 4, 5];
array2.shift();
console.log(array2);