// Write a recursive function called canConstruct. 
// Given an array of words, return true or false
// if the target can be constructed from the wordbank


const canConstruct = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target]
    if (target.length == 0) return true

    for (let word of wordBank) {
        if (target.startsWith(word)) {
            let suffix = target.slice(word.length)
            memo[suffix] = canConstruct(suffix, wordBank, memo)
            if (memo[suffix]) return memo[suffix];
        }
    }

    return false
};


console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeeee"]))