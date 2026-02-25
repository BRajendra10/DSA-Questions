// wap to find the  minimum element of an array.

const arr = [0, 1, 2, 3, 4];

let min = arr[0];

for(let i = 1; i < arr.length; i++){
    console.log(arr[i])

    if(min > arr[i]) {
        min = arr[i]
    }
}


console.log("min", min); 