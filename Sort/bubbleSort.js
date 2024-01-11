// Write a function named bubbleSort
// which takes in an array of intergers and sorts them out in ascending order

//Unoptimized Big On2
function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                // let temp = arr[j]
                // arr[j] = arr[j+1]
                // arr[j+1] = temp

                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }

    return arr;
}

console.log('result', bubbleSort([37,46,29,8]))
console.log('result', bubbleSort([1, 3, 4, 6, 7, 23, -33, 11, 9, 10, 17, 16, 15]))


// var t1 = performance.now()
// let arr = Array.apply(null, {length: 100000}).map(Function.call, Math.random)
// console.log('result', bubbleSort(arr))
// var t2 = performance.now()
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)