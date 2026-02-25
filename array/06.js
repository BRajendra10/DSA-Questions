// 6. Write a program to add an element at the beginning of an array.

const array = [1, 2, 3, 4, 5];
let node = 0;

array.length++;

for(let i = array.length - 1; i > 0; i--) {
    [array[i], array[i - 1]] = [array[i - 1], array[i]]
    if(i === 1) {
        array[0] = node;
    } 
}

console.log(array);

// Alternative: Using unshift() method
const array2 = [1, 2, 3, 4, 5];
array2.unshift(0);
console.log(array2);