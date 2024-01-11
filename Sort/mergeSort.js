// Write a function named mergeSort
// which takes in an array of intergers and sorts them out in ascending order

function merge(arr1, arr2) {
    if (!arr1) return arr2
    if (!arr2) return arr1

    let i = 0;
    let j = 0;
    let newArray = [];
    while (newArray.length < arr1.length + arr2.length) {
        if (arr1[i] < arr2[j] || !arr2[j]) {
            newArray.push(arr1[i])
            i++;
        } else {
            newArray.push(arr2[j])
            j++;
        }
    }

    return newArray;
}


//Worst Case Time Complexity O(n log n)
//Worst Case Space Complexity 0(n)

function mergeSort(arr) {
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right);
}


console.log('result', mergeSort([37,46,29,8]))
console.log('result', mergeSort([1, 3, 4, 6, 7, 23, -33, 11, 9, 10, 17, 16, 15]))

// var t1 = performance.now()
// let arr = Array.apply(null, {length: 100000}).map(Function.call, Math.random)
// console.log('result', mergeSort(arr))
// var t2 = performance.now()
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
