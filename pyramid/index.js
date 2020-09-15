// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3) 3 
//       '  #  ' 1 i=1
//       ' ### ' 3 i=2
//       '#####' 5 i=3

function pyramid(n) {
    solution1(n);
}

function solution1(n) {
    if (n == 1) {
        console.log('#');
        return;
    }
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '#'.repeat(i == 1 ? i : i + (i - 1)) + ' '.repeat(n - i));
    }
}

module.exports = pyramid;