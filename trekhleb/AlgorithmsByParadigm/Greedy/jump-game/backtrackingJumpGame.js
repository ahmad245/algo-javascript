// The Problem
//  Given an array of non-negative integers, you are initially positioned at the first index of the array.
//  Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example #1

// Input: [2,3,1,1,4]
// index   0 1 2 3 4
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example #2
// from index 0 (2) to index 1 (3) because maximim jump = 2 ,we jump just 1 and from index 1 (3) we jump 3 steps to the index 4 (4)

// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index.
// Naming
// We call a position in the array a "good index" if starting at that position, we can reach the last index.
//  Otherwise, that index is called a "bad index". The problem then reduces to whether or not index 0 is a "good index".

// Solutions
// Approach 1: Backtracking
// This is the inefficient solution where we try every single jump pattern that takes us from the first position to the last.
//  We start from the first position and jump to every index that is reachable. We repeat the process until last index is reached. When stuck, backtrack.

// See backtrackingJumpGame.js file

// Time complexity:: O(2^n). There are 2n (upper bound) ways of jumping from the first position to the last, where n is the length of array nums.

// Auxiliary Space Complexity: O(n). Recursion requires additional memory for the stack frames.
// Input: arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
// Output: 3 (1-> 3 -> 8 -> 9)
// Explanation: Jump from 1st element 
// to 2nd element as there is only 1 step, 
// now there are three options 5, 8 or 9. 
// If 8 or 9 is chosen then the end node 9 
// can be reached. So 3 jumps are made.

// Input:  arr[] = {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1}
// Output: 10
// Explanation: In every step a jump 
// is needed so the count of jumps is 10.

// expect(backtrackingJumpGame([1, 0])).toBe(true);
// expect(backtrackingJumpGame([100, 0])).toBe(true);
// expect(backtrackingJumpGame([2, 3, 1, 1, 4])).toBe(true);
// expect(backtrackingJumpGame([1, 1, 1, 1, 1])).toBe(true);
// expect(backtrackingJumpGame([1, 1, 1, 10, 1])).toBe(true);
// expect(backtrackingJumpGame([1, 5, 2, 1, 0, 2, 0])).toBe(true);

// expect(backtrackingJumpGame([1, 0, 1])).toBe(false);
// expect(backtrackingJumpGame([3, 2, 1, 0, 4])).toBe(false);
// expect(backtrackingJumpGame([0, 0, 0, 0, 0])).toBe(false);
// expect(backtrackingJumpGame([5, 4, 3, 2, 1, 0, 0])).toBe(false);[2,5,0,0]
// expect(backtrackingJumpGame([2,5,0,0])).toBe(false);
// expect(backtrackingJumpGame([1,1,1,0])).toBe(false);



// note 
//1- if first will be able to jump to the end we will go 
//2 - if first index is grater than scond index and reach to 0 =>fail 
//3-  compare the next step if next step greater than the first step and the next will reach to the end we will go 
const backtrackingJumpGame = (nums = [2, 3, 1, 1, 4]) => {


}


// let backtrack = 0;
// let i = 0;
// if (arr.length === 1) return true;
// if (arr[0] === 0) return false;
// while (i < arr.length - 1) {

//     if (arr[arr[i]] === arr[arr.length]) return true;
//     if (arr[i + arr[i]] !== 0) {
//         i = i + arr[i];
//     } else {
//         i = arr[i + 1];
//     }

// }
// return true;