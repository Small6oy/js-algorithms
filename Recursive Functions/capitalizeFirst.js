// Write a recursive function called capitalizeFirst. 
// Given an array of strings, capitalize the first 
// letter of each string in the array.

// SAMPLE INPUT / OUTPUT
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst (arr) {
    if(arr.length == 0) return []

    let capitalWord = arr[0][0].toUpperCase() + arr[0].slice(1)

    let newArray = []
    newArray.push(capitalWord)
    return newArray.concat(capitalizeFirst(arr.slice(1)))
}


console.log('result',capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana'])