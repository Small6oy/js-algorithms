// Binary Search Exercise
// Write a function called binarySearch 
// which accepts a sorted array and a 
// value and returns the index at which
// the value exists. Otherwise, return -1.

// Examples
// binarySearch([1,2,3,4,5],2) // 1
// binarySearch([1,2,3,4,5],3) // 2
// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],6) // -1
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10) // 2
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95) // 16
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100) // -1

function binarSearch(arr, val) {

    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex < rightIndex) {
        let midIndex = Math.ceil((leftIndex + rightIndex) / 2)
        let midVal = arr[midIndex]
        if (midVal === val) {
            return midIndex
        } else if (midVal < val) {
            leftIndex++
        } else if (midVal > val) {
            rightIndex--
        }
    }

    return -1
}

console.log('result', binarySearch([1, 2, 3, 4, 5], 2));
console.log('result', binarySearch([1, 2, 3, 4, 5], 3));
console.log('result', binarySearch([1, 2, 3, 4, 5], 5));
console.log('result', binarySearch([1, 2, 3, 4, 5], 6));

