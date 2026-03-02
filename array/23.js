// 23. Write a program to remove duplicate elements from an array.

let arr = [1, 2, 4, 2, 6, 4];
// const map = new Map();

// for(let i = 0; i < arr.length; i++) {
//     if(map.has(arr[i])) {
//         map.delete(arr[i]);
//     } else {
//         map.set(arr[i], 1);
//     }
// }

arr = arr.filter((item, index) => arr.indexOf(item) === index);


console.log(arr);