// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    return solution1(str);
}

function solution1(str = '') {
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let obj = {};
    for (const char of str.replace('/[^\w]/g').toLowerCase()) {
        obj[char] = obj[char] + 1 || 1
    };
    let sum = 0;

    for (const vowel of vowels) {
        if (obj[vowel]) {
            sum += obj[vowel];
        }
    }
    return sum;
}

function solution2(str) {
    let count = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++;
        }
    }

    return count;
}

function solution3(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}


module.exports = vowels;