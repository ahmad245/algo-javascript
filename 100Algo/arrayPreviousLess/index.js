// Given array of integers,
// for each position i, search among the previous positions
// for the last(from the left) position that contains a smaller value.Store this value at position i in the answer.If no such value can be found, store - 1 instead.

// Example

// For items = [3, 5, 2, 4, 5], the output should be arrayPreviousLess(items) = [-1, 3, -1, 2, 4].

// Hints

// unshift()
const getMin = (arr = [], end) => {
    let max = arr[end];
    for (let i = end; i >= 0; i--) {
        if (arr[i] < max) return arr[i];
    }
    return -1;
};

function arrayPreviousLess(items = [3, 5, 2, 4, 5]) {
    let result = [];

    result.push(-1);
    for (let i = 1; i < items.length; i++) {
        result.push(getMin(items, i));
    }
    return result;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));