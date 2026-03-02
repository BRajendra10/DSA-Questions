// 18. Write a program to search an element in an array.
// 19. Write a program to find the index of an element in an array.

const arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 3) {
        console.log("Found: ", i);
        break;
    }

    if(i === arr.length - 1) {
        console.log("Not Found");
    }
}

// alternative

console.log(arr.indexOf(3));