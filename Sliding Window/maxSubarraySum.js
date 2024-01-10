/* 
* An Example
* Write a function called maxSubarraySum which accepts 
* an array of integers and a number called n. The 
* function should calculate the maximum sum of n 
* consecutive elements in the array.
* 
* maxSubarraySum([1,2,5,2,8,1,5],2) // 10
* maxSubarraySum([1,2,5,2,8,1,5],4) // 17
* maxSubarraySum([4,2,1,6],1) // 6
* maxSubarraySum([4,2,1,6,2],4) // 13
* maxSubarraySum([],4) // null
* 
* Try to get O(n) not O(n2)
*/

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

var t1 = performance.now()
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2))
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

var t1 = performance.now()
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4))
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

var t1 = performance.now()
console.log(maxSubarraySum([4, 2, 1, 6], 1))
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

var t1 = performance.now()
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4))
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

var t1 = performance.now()
console.log(maxSubarraySum([], 4))
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)