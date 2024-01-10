/* 
* Given two strings, write a function to determine if the second string is an anagram of the first. 
* An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, 
* formed from iceman.
* 
* validAnagram('', '') // true
* validAnagram('aaz', 'zza') // false
* validAnagram('anagram', 'nagaram') // true
* validAnagram("rat","car") // false) // false
* validAnagram('awesome', 'awesom') // false
* validAnagram('qwerty', 'qeywrt') // true
* validAnagram('texttwisttime', 'timetwisttext') // true
* 
* Try to get O(n) not O(n2)
*/

function validAnagram(str1, str2) {
    // if string sizes do not match return false
    if (str1.length !== str2.length) {
        return false
    }

    // get frequency of each char item in string and set that as loopup variable
    let lookup = {}
    for (let letter of str1) {
        lookup[letter] = (lookup[letter] || 0) + 1
    }

    // loop and check if char in second string are equivalent to lookup char and frequency
    for (let letter of str2) {

        if(!lookup[letter]){
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true
}

var t1 = performance.now()
console.log(validAnagram('anagram', 'nagaram'))
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

var t1 = performance.now()
console.log(validAnagram('texttwisttime', 'timetwisttext'))
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

var t1 = performance.now()
console.log(validAnagram('awesome', 'awesom'))
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)