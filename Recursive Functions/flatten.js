// Write a recursive function called flatten 
// which accepts an array of arrays and returns
// a new array with all values flattened.

// SAMPLE INPUT / OUTPUT
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

function flatten(arr) {
    if(arr.length == 0) return []

    if(arr.length == 1){
        if(Array.isArray(arr[0])){ 
            return flatten(arr[0])
        } else {
            return arr
        }
    }

    let newArray = []
    if(Array.isArray(arr[0])){
        newArray = flatten(arr[0])
    } else {
        newArray.push(arr[0])
    }
    
    return newArray.concat(flatten(arr.slice(1)))
}