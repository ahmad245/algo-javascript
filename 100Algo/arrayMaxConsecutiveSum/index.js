// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

// Example

// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be arrayMaxConsecutiveSum(inputArray, k) = 8. All possible sums of 2 consecutive elements are:

// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8

const arrayMaxConsecutiveSum = (inputArray = [2, 3, 5, 1, 6], k = 2) => {
    let max = 0;

    for (let i = 0; i < inputArray.length; i++) {
        let sum = 0;
        for (let j = i; j < k + i; j++) {
            if (j >= inputArray.length) break;
            sum += inputArray[j];
        }
        max = Math.max(max, sum);
    }
    return max;
}