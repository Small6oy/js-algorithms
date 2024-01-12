// Write a function named radixSort
// which takes in an array of intergers and sorts them out in ascending order
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// Worst Time Complexity O(nk)
// Worst Space Complexity O(n + k)
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

// console.log('result', radixSort([37, 46, 29, 8]))
console.log('result', radixSort([1, 3, 4, 6, 7, 23, -33, 11, 9, 10, 17, 16, 15]))

// let t1 = performance.now()
// let arr = Array.apply(null, { length: 100000 }).map(Function.call, Math.random)
// console.log('result', quickSort(arr))
// let t2 = performance.now()
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
