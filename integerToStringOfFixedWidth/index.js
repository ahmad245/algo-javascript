// Given a positive integer number and a certain length, we need to modify the given number to have a specified length. We are allowed to do that either by cutting out leading digits (if the number needs to be shortened) or by adding 0s in front of the original number.

// Example

// For number = 1234 and width = 2, the output should be integerToStringOfFixedWidth(number, width) = "34";

// For number = 1234 and width = 4, the output should be integerToStringOfFixedWidth(number, width) = "1234";

// For number = 1234 and width = 5, the output should be integerToStringOfFixedWidth(number, width) = "01234".

// Hints

// concat()
// subString()
// toString()

function integerToStringOfFixedWidth(number, width) {
    let str = number.toString();
    if (width > str.length) {
        let addition = width - str.length;
        return '0'.repeat(addition).concat(str.substring(str.length - width))
    }
    return str.substring(str.length - width);


}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));