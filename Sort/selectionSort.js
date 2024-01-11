// Write a function named selectionSort
// which takes in an array of intergers and sorts them out in ascending order

// Worst Case Big On2
function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }

        // swap
        if(i !== minIndex) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }

    return arr;
}

console.log('result', selectionSort([37, 46, 29, 8, 7, 11]))
console.log('result', selectionSort([1, 3, 4, 6, 7, 23, -33, 11, 9, 10, 17, 16, 15]))