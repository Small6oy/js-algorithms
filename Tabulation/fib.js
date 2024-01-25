// Write a recursive function called fib
// which accepts a number and returns the
// nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is
// the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
// which starts with 1 and 1, and where every number
// thereafter is equal to the sum of the previous two numbers.

// SAMPLE INPUT/OUTPUT
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// Do not use recursion

function fib(num) {

    let table = Array(num + 1).fill(0)
    table[1] = 1

    for (let i = 0; i <= num; i++) {
        table[i + 1] += table[i]
        table[i + 2] += table[i]

    }

    return table[num]
}

console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(10))
console.log(fib(28))
console.log(fib(35))
console.log(fib(44))
console.log(fib(50))