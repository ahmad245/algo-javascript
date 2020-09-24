// Fermat 's factorization method is: If a · b = n (where a ≤ b), then there exist some c and d such that n = c^2 - d^2.
// Your goal is to return for given n such c and d as an array. Since we want c and d to be uniquely determined, in all test cases n is a semiprime number.

// Example

// For n = 15, the output should be fermactor(n) = [4, 1].15 = 4 ^ 2 - 1 ^ 2.
// Hints

// Math.pow()


function fermactor(n) {
    let result = [];
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            if (Math.pow(i, 2) - Math.pow(j, 2) == n) {
                result.push(i, j);
                return result;
            }

        }
    }
    return "Not found try another number";
}

console.log(fermactor(15)); // [4,1] = 4^2 - 1^2 = 15