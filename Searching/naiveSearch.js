// Naive Search

// Create a function called naiveSearch
// which calculates the number of times a pattern occurs 
// withing a given string.

function naiveSearch(str, pattern) {
    let i = 0;
    let pI = 0;

    let count = 0;
    let startIndex = 0;

    while (i < str.length) {
        if (pattern[pI] === str[i]) {
            if (str[i] == pattern[0]) {
                startIndex = i;
            }
            pI++;

            if (pI === pattern.length) {
                i = startIndex++;
                count++;
                pI = 0;
            }
        } else {
            pI = 0;
        }

        i++
    }

    return count;
}

console.log('result', naiveSearch('wowomgzomg', 'omg'));
console.log('result', naiveSearch('lorie loled', 'lol'));
