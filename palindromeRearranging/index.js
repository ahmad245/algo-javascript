// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

// Hints

// split()
// hasOwnProperty()
function palindromeRearranging(inputString = '') {
    let obj = {};
    for (const item of inputString) {
        obj[item] = obj[item] + 1 || 1;
    }

    // if obj contain letter with fr : 2 ,fr:1 =>true , fr:3,fr:2 =>true 

    let odd = 0;
    let even = 0;
    for (const key in obj) {
        if (obj[key] % 2 == 0) {
            even++;
        } else {
            odd++
        }
    }
    console.log(odd, even);
    return odd > 1 ? false : true;
}

console.log(palindromeRearranging('aabb'));