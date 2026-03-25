const arr = [0, 1, 2, 3, 4, 5];
// const arr = [5, 4, 3, 2, 1, 0];

function isSorted(arr) {
    let isSorted = true;

    if (arr[0] > arr[1]) { // Checking order of sorted array:
        // des
        
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                isSorted = true
            } else {
                return isSorted = false
            }
        }
    } else {
        // asc

        for (let i = 0; i < arr.length - 1; i++) {

            if (arr[i] < arr[i + 1]) {
                isSorted = true
            } else {
                return isSorted = false
            }
        }
    }

    return isSorted
}

console.log(isSorted(arr))