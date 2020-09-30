// Given a sorted integer array that does not contain any duplicates, return a summary of the number ranges it contains.

// Example

// For nums = [-1, 0, 1, 2, 6, 7, 9], the output should be composeRanges(nums) = ["-1->2", "6->7", "9"].
// Hints

// push()

function composeRanges(nums = []) {
    let result = [];
    let p1 = nums[0];
    let p2 = nums[0];
    let i = 0;
    let length = nums.length;

    while (i < length) {
        if (nums[i + 1] == nums[i] + 1) {
            p2 = nums[i + 1];
        } else if (p1 == p2) {
            result.push(`${p1}`);

            p2 = nums[i + 1];
            p1 = p2;
        } else {
            result.push(`${p1}->${p2}`);
            p2 = nums[i + 1];
            p1 = p2;
        }

        i++;
    }
    return result;
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
console.log(
    composeRanges([-4, -3, -2, 0, 1, 2, 4, 7, 8, 9, 12, 13, 14, 15, 45])
);

// ["-1->2", "6->7", "9"].
//["-4 -> -2", "0 -> 2", "4", "7 -> 9", "12 -> 15", "45"]