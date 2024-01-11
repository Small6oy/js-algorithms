// Write a function named quickSort
// which takes in an array of intergers and sorts them out in ascending order


function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right) //3
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

// console.log('result', quickSort([37, 46, 29, 8]))
console.log('result', quickSort([1, 3, 4, 6, 7, 23, -33, 11, 9, 10, 17, 16, 15]))

// let t1 = performance.now()
// let arr = Array.apply(null, { length: 100000 }).map(Function.call, Math.random)
// console.log('result', quickSort(arr))
// let t2 = performance.now()
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
