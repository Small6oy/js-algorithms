/* 
* An Example
* Given a sorted array of integers, write a function called search, 
* that accepts a value and returns the index where the value passed 
* to the function is located. If the value is not found, return -1
* 
* binarySearch([]1,2,3,4,5,6,4) // 3
* binarySearch([1,2,3,4,5,6],6) // 5
* binarySearch([1,2,3,4,5,6],11) // -1
* 
* Try to get OLog(n) not O(n)
*/

function binarySearch(arr, value) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);

        if (arr[middle] < value) {
            min = middle + 1;
        } else if (arr[middle] > value) {
            max = middle - 1
        } else {
            return middle;
        }
    }

    return -1;
}

var t1 = performance.now()
console.log(binarySearch([1, 2, 3, 4, 5, 6], 4))
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

var t1 = performance.now()
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6))
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

var t1 = performance.now()
console.log(binarySearch([1, 2, 3, 4, 5, 6], 11))
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
