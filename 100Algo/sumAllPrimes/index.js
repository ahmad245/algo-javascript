// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.

// Example

// sumAllPrimes(10) should return 17
// sumAllPrimes(977) should return 73156
// Hints

// push()
// reduce()


function sumAllPrimes(num = 10) {

    sum = 0
    for (let i = 2; i <= num; i++) {
        for (let j = 2; j < num; j++) {
            if (i === j) {
                sum += j;
                console.log(j);
            }
            if (i % j === 0) {
                break;
            }

        }
    }
    return sum;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));