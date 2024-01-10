// Write a function called sameFrequency. Given two positive integers, 
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(int1, int2) {
    if(int1.toString().length != int2.toString().length) return false

    function countFrequency(val) {
        let freqCountObj = {}
        for (let key of val.toString()) {
            freqCountObj[key] = (freqCountObj[key] || 0) + 1;
        }
        return freqCountObj
    }

    let freq1 = countFrequency(int1)
    let freq2 = countFrequency(int2)
    for (let key in freq1) {
        if (!freq2[key]) {
            return false
        } else if (freq2[key] != freq1[key]){
            return false
        }
    }

    return true;
}

console.log(sameFrequency(182, 281))
console.log(sameFrequency(34,14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22,222))