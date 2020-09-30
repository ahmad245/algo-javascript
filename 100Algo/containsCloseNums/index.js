// Given an array of integers nums and an integer k,
// determine whether there are two distinct indices i and j in the array where nums[i] = nums[j] and the absolute difference between i and j is less than or equal to k.

// Example

// For nums = [0, 1, 2, 3, 5, 2] and k = 3, the output should be containsCloseNums(nums, k) = true.
// There are two 2s in nums, and the absolute difference between their positions is exactly 3.

// For nums = [0, 1, 2, 3, 5, 2] and k = 2, the output should be
// containsCloseNums(nums, k) = false.

// The absolute difference between the positions of the two 2s is 3, which is more than k.

// Hints

// Math.abs()



var t0 = performance.now()




function containsCloseNums(nums = [], k) {
    let obj = {};

    nums.forEach((el, i) => {
        obj[el] = obj[el] || [];
        obj[el].push(i);
    });
    for (const key in obj) {
        if (obj[key].length < 2) {
            delete obj[key];
        } else {
            obj[key] = Math.abs(obj[key][0] - obj[key][1]);
        }
    }

    return Math.min(...Object.values(obj)) <= k;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));

var t1 = performance.now()
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")