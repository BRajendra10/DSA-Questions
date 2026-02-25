// 2. Write a program to find the length of an array.

const array = [1, 2, 3, 4, 5];
let length = 0;

for(let i of array){
    length++;
}

console.log(length);

// Alternative: Using the built-in length property
console.log("Length using property:", array.length);