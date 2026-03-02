/* 17. Write a program to reverse an array.
*/

const arr = [1, 2, 3, 4, 5];
const temp = [];

for(let i = arr.length - 1; i >= 0; i--) {
    temp.push(arr[i]);
}

console.log(temp);

// arr.reverse();
// console.log(arr);