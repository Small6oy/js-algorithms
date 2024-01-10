/* 
* Given an integer array nums sorted in non-decreasing order, 
* remove the duplicates in-place such that each unique element
* appears only once. The relative order of the elements should 
* be kept the same. Then return the number of unique elements in nums.
*
* Consider the number of unique elements of nums to be k, 
* to get accepted, you need to do the following things:
*
* Change the array nums such that the first k elements of nums contain 
* the unique elements in the order they were present in nums initially. 
* The remaining elements of nums are not important as well as the size of nums.
* Return k.
* 
* removeDuplicates([1,1,2]) // [1,2,_] 2
* removeDuplicates([0,0,1,1,1,2,2,3,3,4]) // [0,1,2,3,4,_,_,_,_,_] 5

* Try to get O(n) not O(n2)
*/

function removeDuplicates(arr) {
    if (arr.length == 0) return []
    
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
console.log(removeDuplicates([1,1,2]))
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

var t1 = performance.now()
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
