// 10. Write a program to print all elements of an array using loop.

const array = [1, 2, 3, 4, 5];

for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Alternative: Using for...of loop (Cleaner)
for (const element of array) {
    console.log(element);
}

// Alternative: Using forEach method (Functional)
array.forEach(element => console.log(element));