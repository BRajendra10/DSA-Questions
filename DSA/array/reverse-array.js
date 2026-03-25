const arr = [5, 4, 3, 2, 1, 0];

function BrutReverse(arr) {
    let temp = [];
    let j = 0;
    temp.length = arr.length;
    
    for(let i = arr.length - 1; i >= 0; i--) {
        temp[j] = arr[i];
        j++
    }

    console.log(temp)

    return temp
}

function inPlace(arr) {
    let temp = [];
    let j = 0;
    temp.length = arr.length;
    
    for(let i = arr.length - 1; i >= 0; i--) {
        temp[j] = arr[i];
        j++
    }

    for(let k = 0; k < temp.length; k++) {
        arr[k] = temp[k]
    }

    console.log(temp)

    return arr
}

function Pointer(arr) {
    let i = 0;
    let j = arr.length - 1;

    while(i < j) {
        // console.log(arr[i], arr[j]);
        [arr[i], arr[j]] = [arr[j], arr[i]]
        // console.log(arr)
        i++
        j--
    }

    return arr
}

// console.log("Brute force", BrutReverse(arr))
// console.log("Inplace", inPlace(arr))
console.log("Pointer method", Pointer(arr))