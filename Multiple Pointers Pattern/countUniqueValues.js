/* 
* Implement a function called countUniqueValues, 
* which accepts a sorted array, and counts the 
* unique values in the array. There can be 
* negative numbers in the array, but it will 
* always be sorted.
* 
* countUniqueValues([1,1,1,1,1,2]) // 2
* countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
* countUniqueValues([]) // 0
* countUniqueValues([-2,-1,-1,0,1]) // 4
* 
* Try to get O(n) not O(n2)
*/

function countUniqueValues(arr) {
    if (arr.length == 0) return 0
    if (arr.length == 1) return 1

    let i = 0
    for(let j = 0; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }

    return i + 1;
}

var t1 = performance.now()
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

var t1 = performance.now()
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

var t1 = performance.now()
console.log(countUniqueValues([]))
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

var t1 = performance.now()
console.log(countUniqueValues([-2, -1, -1, 0, 1]))
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)