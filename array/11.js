// Write a program to find the sum of array eliments.
const arr = [0, 1, 2, 3, 4, 5];

let count = 0;

for (let num of arr) {
    console.log(num);
    count += num;
}

console.log("Count", count);