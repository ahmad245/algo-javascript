// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz


function fizzBuzz(n) {
    solution2(n)
}

function solution1(n) {
    let p1 = 3;
    let p2 = 5;
    let p3 = 15;

    for (let index = 1; index <= n; index++) {
        if (index == p1 && index !== p3) {
            console.log('fizz');
            p1 = p1 + 3;
        } else if (index == p2 && index !== p3) {
            console.log('buzz');
            p2 = p2 + 5;
        } else if (index == p3) {
            console.log('fizzbuzz');

        } else {
            console.log(index);
        }



    }
}

function solution2(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('fizzbuzz');
        } else if (i % 3 == 0) {
            console.log('fizz');
        } else if (i % 5 == 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}
module.exports = fizzBuzz;