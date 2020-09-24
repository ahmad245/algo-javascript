// Given an array of integers numbers, we'd like to find the closest pair of elements that add up to sum.
// Return the distance between the closest pair (absolute difference between the two indices). If there isn't a pair that adds up to sum, return -1.

// Example

// For numbers = [1, 0, 2, 4, 3, 0] and sum = 5 the output should be findClosestPair(numbers, sum) = 2. 1 and 4 have a sum of 5, but 2 and 3 are closer.

// For numbers = [2, 3, 7] and sum = 8 the output should be findClosestPair(numbers, sum) = -1. There are no pairs that have a sum of 8.

// Hints

// Math.abs()

function findClosestPair(numbers = [], sum) {
    let obj = {};
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] == sum && i <= j) {
                obj[Math.abs(i - j)] = [numbers[i], numbers[j]];
            }
        }
    }
    let keys = Object.keys(obj);
    return keys.length > 0 ? Math.min(...keys) : -1;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));