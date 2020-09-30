// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    return solution1(n);
}

function solution1(n) {
    let result = Math.abs(n);
    if (result >= 0 && result <= 9) return Math.sign(n) * result;
    let str = result.toString().split('').reverse().join('');
    return Math.sign(n) * parseInt(str);

}

module.exports = reverseInt;