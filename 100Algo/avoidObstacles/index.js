// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be avoidObstacles(inputArray) = 4.

// Check out the image below for better understanding:



// Hints

// sort()
// every()
// Input/Output

// [time limit] 4000ms (js)
// [input] array.integer inputArray
// Non-empty array of positive integers.

// Guaranteed constraints:

// 2 ≤ inputArray.length ≤ 10,

// 1 ≤ inputArray[i] ≤ 40.

// [output] integer
// The desired length.


// Input : obs[] = [5, 3, 6, 7, 9]
// Output : 4
// Obstacles are at points 3, 5, 6, 7 and 9
// We jump from 0 to 4, then 4 to 8, then 4
// to 12. This is how we reach end with jumps
// of length 4. If we try lower jump lengths,
// we cannot avoid all obstacles.

// Input : obs[] = [5, 8, 9, 13, 14]
// Output : 6

function avoidObstacles(inputArray = [5, 3, 6, 7, 9]) {
    const largestArrayVal = Math.max(...inputArray);
    for (let i = 1; i < largestArrayVal + 1; i++) {
        if (inputArray.every(el => el % i !== 0)) {
            return i;
        }
    }

}

console.log(avoidObstacles([5, 3, 6, 7, 9]));