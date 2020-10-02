// Approach 2: Dynamic Programming
// Intuition

// In brute force, we iterate over the left and right parts again and again just to find the highest bar size up to that index. But, this could be stored. Voila, dynamic programming.

// So we may pre-compute highest bar on left and right of every bar in O(n) time. Then use these pre-computed values to find the amount of water in every array element.

// The concept is illustrated as shown:

// DP Trapping Rain Water

// Steps

// Find maximum height of bar from the left end up to an index i in the array left_max.
// Find maximum height of bar from the right end up to an index i in the array right_max.
// Iterate over the height array and update answer:
// Add min(max_left[i], max_right[i]) − height[i] to answer.
// Complexity Analysis

// Time complexity: O(n). We store the maximum heights upto a point using 2 iterations of O(n) each. We finally update answer using the stored values in O(n).

// Auxiliary space complexity: O(n) extra space. Additional space for left_max and right_max arrays than in Approach 1.

// References
// GeeksForGeeks
// LeetCode
// [3, 0, 2, 0, 4]
//[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
//[2, 0, 2]

module.exports.dpRainTerraces = (arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) => {


    let left = new Array(arr.length).fill(0),
        right = new Array(arr.length).fill(0);
    left[0] = arr[0];
    right[arr.length - 1] = arr[arr.length - 1];
    let res = 0;
    for (let i = 1; i < arr.length; i++) { left[i] = (Math.max(left[i - 1], arr[i])) }
    for (let i = arr.length - 2; i >= 0; i--) { right[i] = (Math.max(right[i + 1], arr[i])) }
    for (let i = 0; i < arr.length; i++) {
        res += Math.min(left[i], right[i]) - arr[i];
    }

    return res;


}