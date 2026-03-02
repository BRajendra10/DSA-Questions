// 26. Write a program to find common elements between two arrays.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const commonElements = arr1.filter(item => arr2.includes(item));

console.log("Common elements:", commonElements);