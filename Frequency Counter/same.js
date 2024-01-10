/* 
* Write a function called same, which accepts two arrays. 
* The function should return true if every value in the array 
* has it's corresponding value squared in the second array. 
* The frequency of values must be the same.
* 
* same([1,2,3], [4,1,9]) // true
* same([1,2,3], [1,9]) // false
* same([1,2,1], [4,4,1]) // false (must be same frequency)
* 
* Try to get O(n) not O(n2)
*/ 

function same(arr1, arr2){
    // if arr sizes do not match return false
    if(arr1.length !== arr2.length){
        return false
    }

    // get frequency of each number item in array
    let frequencyCounter1 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    // get frequency of each item in array
    let frequencyCounter2 = {}
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    //loop through items in one frequency counter1
    for(let key in frequencyCounter1){

        // check for key value squared, must be in frequency counter 2
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }

        // check for key value squared frequency, must be in frequency counter 2
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false

        }
    }

    return true
}

var t1 = performance.now()
console.log(same([1,2,3], [4,1,9]))
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1)/ 1000} seconds.`)