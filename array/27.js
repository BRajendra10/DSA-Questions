// 27. Write a program to find unique elements from two arrays.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
let newArray = [...arr1, ...arr2];

newArray = newArray.filter((item, index) => newArray.indexOf(item) === index);


console.log("Unique elements:", newArray);