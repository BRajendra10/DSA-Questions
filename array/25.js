// 25. Write a program to merge multiple arrays.

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const arr4 = [7, 8];

const merged1 = arr1.concat(arr2, arr3, arr4);
console.log("Merged multiple using concat:", merged1);

const merged2 = [...arr1, ...arr2, ...arr3, ...arr4];
console.log("Merged multiple using spread:", merged2);