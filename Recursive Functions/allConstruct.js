// Write a recursive function called allConstruct
// Given an array of words and a string, return a 2D array 
// containing all the ways that the target can be constructed by concatenating
// elements of the words array. Each element of the 2D array should represent
// one combination that constructs the target
// You may reuse the array of words as many times as needed


const allConstruct = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target]
    if (target.length == 0) return [[]]

    let result = []
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            const suffixWays = allConstruct(suffix, wordBank, memo)
            const targetWays = suffixWays.map(way => [word, ...way])
            result.push(...targetWays)
        }
    }

    memo[target] = result
    return result;
};


console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
// console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeeee", "f"]))