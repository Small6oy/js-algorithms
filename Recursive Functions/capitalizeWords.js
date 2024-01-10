// Write a recursive function called capitalizeWords. 
// Given an array of words, return a new array 
// containing each word capitalized.

// SAMPLE INPUT / OUTPUT
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizeWords(arr) {
    if (arr.length == 0) return []

    let newArray = []
    newArray.push(arr[0].toUpperCase())
    return newArray.concat(capitalizeWords(arr.slice(1)))
}

let words = ['i', 'am', 'learning', 'recursion'];

// ['I', 'AM', 'LEARNING', 'RECURSION']
console.log('result', capitalizeWords(words));