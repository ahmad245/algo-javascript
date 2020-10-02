const dpMaximumSubarray = (arr = [-2, -3, 4, -1, -2, 1, 5, -3]) => {
    // We iterate through the inputArray once, using a greedy approach to keep track of the maximum
    // sum we've seen so far and the current sum.
    //
    // The currentSum variable gets reset to 0 every time it drops below 0.
    //
    // The maxSum variable is set to -Infinity so that if all numbers are negative, the highest
    // negative number will constitute the maximum subarray.

    let max = -Infinity;
    let startEndex = 0;
    let endEndex = 0;
    let sum = 0;
    let startCurentEndex = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > max) {
            startEndex = startCurentEndex;
            endEndex = i + 1;
            max = sum;
        }
        if (max < 0) {
            sum = 0;
            startCurentEndex = i + 1
        }

    }
    return arr.slice(startEndex, endEndex);
}