// Find the leftmost digit that occurs in a given string.

// Example

// For inputString = "var_1__Int", the output should be firstDigit(inputString) = '1';

// For inputString = "q2q-q", the output should be firstDigit(inputString) = '2';

// For inputString = "0ss", the output should be firstDigit(inputString) = '0'.

// Hints

// split()
// includes()

function firstDigit(inputString = '') {
    let num;
    inputString.split('').forEach((el) => {
        if (!isNaN(el)) {
            num = el;
        };
    });
    return num;
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));