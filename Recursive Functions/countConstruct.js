// Write a recursive function called countConstruct
// Given an array of words, return a number 
// showing the number of ways we can construct the target


const countConstruct = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target]
    if (target.length == 0) return 1

    let totalCount = 0;
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            let suffix = target.slice(word.length)
            let count = countConstruct(suffix, wordBank, memo)
            totalCount += count
        }
    }

    memo[target] = totalCount
    return totalCount
};


console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeeee", "f"]))