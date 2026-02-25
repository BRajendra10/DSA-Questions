// wap to find the  maximum element of an array.

const arr = [0, 1, 2, 3, 4];
let max = arr[0];

for(let i = 1; i < arr.length; i++){
    console.log(arr[i])

    if(max < arr[i]) {
        max = arr[i]
    }
}


console.log("max", max);