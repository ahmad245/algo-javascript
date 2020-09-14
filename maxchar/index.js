// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    return solution1(str);
}

function solution1(str) {
    let obj = {};
    for (const char of str.replace('/[^\w]/g').toLowerCase()) {
        obj[char] = obj[char] + 1 || 1;
    }

    let max = 0;
    for (const key in obj) {
        if (obj[key] > max) {
            max = key;
        }
    }
    return max;
}

module.exports = maxChar;