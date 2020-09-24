// Note: Write a solution that only iterates over the string once and uses O(1) additional memory,
// since this is what you would be asked to do during a real interview.

// Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

// Example

// For s = "abacabad", the output should be firstNotRepeatingCharacter(s) = 'c'.
// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

// For s = "abacabaabacaba", the output should be firstNotRepeatingCharacter(s) = '_'.
// There are no characters in this string that do not repeat.

// Hints

// split()
// hasOwnProperty()

function firstNotRepeatingCharacter(s = '') {

    let obj = {};
    let arr = s.split('');
    for (const item of arr) {
        obj[item] = obj[item] + 1 || 1;
    }
    for (const key in obj) {
        if (obj[key] <= 1) return key;
    }
    return '_';
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));