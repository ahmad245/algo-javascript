// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
//The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

// Example

// sumOddFibonacciNums(10) should return 10
// sumOddFibonacciNums(1000) should return 1785
// sumOddFibonacciNums(4000000) should return 4613732

function sumOddFibonacciNums(num = 20) {
    let fibonacci = [];
    fibonacci.push(1, 1);
    for (let i = 2; i < num; i++) {
        if (fibonacci[i - 2] + fibonacci[i - 1] >= num) break;
        fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
    }

    return fibonacci.reduce((ac, item) => {
        if (item % 2 !== 0) {
            ac = ac + item;
        }
        return ac;
    }, 0);
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));