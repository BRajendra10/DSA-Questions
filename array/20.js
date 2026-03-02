// 20. Write a program to remove a specific element from an array.

const arr = [1, 2, 3, 4, 5];
let index = arr.indexOf(3);

for(let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}

arr.length--;

console.log(arr);

// arr.splice(2, 1);

// console.log(arr);