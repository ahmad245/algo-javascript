// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let strReverse = reverse(str);
    return strReverse === str;
}

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = palindrome;