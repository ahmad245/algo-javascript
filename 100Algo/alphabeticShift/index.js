// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

// Example

// For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

// Hints

// split()
// indexOf()
// join()
// Input/Output

// [time limit] 4000ms (js)
// [input] string inputString
// Non-empty string consisting of lowercase English characters.

function alphabeticShift(inputString = 'crazy') {
    const alphabet = ('abcdefghijklmnopqrstuvwxyz').split('');
    return inputString.split('').map((el) => {
        if (el == 'z') {
            el = 'a';
        } else {
            el = alphabet[alphabet.indexOf(el) + 1];
        }
        return el;

    }).join('');

}