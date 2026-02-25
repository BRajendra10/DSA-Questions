// wap to find the average of array eliements.
  
const arr = [0, 1, 2, 3, 4, 5];
let count = 0;

for (let num of arr) {
    console.log(num);
    count += num;
}

console.log("Average: ", count / arr.length);