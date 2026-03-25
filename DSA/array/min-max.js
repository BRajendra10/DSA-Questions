// Find min and max from an array
const arr = [20, 5, 2, -3, 8, 6];
let Max = arr[0]
let Min = arr[0]

function findMinMax(arr) {
    // const array = arr.sort((a, b) => a - b);

    for(let i = 1; i < arr.length; i++) {
        // console.log("Current -> next value: ", arr[i], arr[i+1]);
        // console.log("Current Max", Math.min(arr[i], arr[i + 1]))
        // console.log("Current Min", Math.max(arr[i], arr[i + 1]))
        if(arr[i] > Max) {
            Max = arr[i]
        } 

        if(arr[i] < Min) {
            Min = arr[i]
        }
    } 

    return [Max, Min];
}

console.log(findMinMax(arr))