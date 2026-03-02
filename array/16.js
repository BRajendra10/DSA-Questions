// wap to sort and array in descending order.

const arr = [2, 4, 3, 0, 1];

// using loog
// for(let i = 0; i < arr.length; i++) {
//     for(let j = i+1; j < arr.length; j++) {
//         if(arr[i] < arr[j]) {
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//     }
// }

// built in method
arr.sort((a, b) => b - a);

console.log(arr)