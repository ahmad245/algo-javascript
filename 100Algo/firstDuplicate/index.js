// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number
// for which the second occurrence has the minimal index.In other words,
//     if there are more than 1 duplicated numbers,
// return the number
// for which the second occurrence has a smaller index than the second occurrence of the other number does.If there are no such elements,
//     return -1.

// Example

// For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3.
// There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.

// For a = [2, 4, 3, 5, 1], the output should be firstDuplicate(a) = -1.
// Hints

// hasOwnProperty()

function firstDuplicate(a = []) {
    let obj = {};
    for (let i = 0; i < a.length; i++) {
        obj[a[i]] = obj[a[i]] || [];
        obj[a[i]].push(i);
    }

    let el;
    let min = Infinity;
    for (const key in obj) {
        if (obj[key].length > 1) {
            if (obj[key][1] - obj[key][0] < min) {
                min = obj[key][1] - obj[key][0];
                el = key;
            }
        }
    }
    return el || -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));