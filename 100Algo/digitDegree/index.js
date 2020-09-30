// Let's define digit degree of some positive integer as the number of times 
//we need to replace this number with the sum of its digits until we get to a one digit number.

// Given an integer, find its digit degree.

// Example

// For n = 5, the output should be digitDegree(n) = 0;
// For n = 100, the output should be digitDegree(n) = 1. 1 + 0 + 0 = 1.
// For n = 91, the output should be digitDegree(n) = 2. 9 + 1 = 10 -> 1 + 0 = 1.
// Hints

// toString()
// parseInt()
// split()
// reduce()

const digitDegree = (n) => {
    if (n <= 9) return 0;

    let result = getDigit(n);
    let start = parseInt(result.toString()[0]);
    let restString = result.toString().substring(1)
    let restInt = parseInt(restString || result.toString().substring(0));
    return start + digitDegree(restInt)

}

function getDigit(num) {
    const nums = num.toString().split('').map((element) => parseInt(element));
    return nums.reduce((a, b) => {
        return a + b;
    })
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
console.log(getDigit(128999921232123123212));
console.log(digitDegree(31));
console.log(digitDegree(91));