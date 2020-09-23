// You are given the string s. Your friend just asked you if it's possible to change the string from s to a string t by removing some characters from it.
// You're a pro at programming, so you decided to create a program to determine this.

// Example

// For s = "ceoydefthf5iyg5h5yts" and t = "codefights", the output should be convertString(s, t) = true.

// For s = "addbyca" and t = "abcd", the output should be convertString(s, t) = false.

// Hints

// concat()
// split()
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s A string with alphanumeric characters.

// Guaranteed constraints:

// 1 ≤ s.length ≤ 1000.

// [input] string t

// A string with alphanumeric characters.

// Guaranteed constraints: 1 ≤ t.length ≤ 1000.

// [output] boolean Return true if it is possible to convert s to t, otherwise return false.
var t0 = performance.now();

function convertString(s = "", t = "") {
    let result = "";
    let i = 0;
    let p1 = 0;
    let p2 = 0;
    let length = s.length;
    while (i < length) {
        if (s[p1] === t[p2]) {
            result = result.concat(t[p2]);
            p1++;
            p2++;
        } else {
            p1++;
        }
        i++;
    }
    return result === t;
}

function convertString2(s, t) {
    let word = "";
    let tIndex = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === t[tIndex]) {
            word = word.concat(s[i]);
            tIndex++;

            if (word === t) {
                return true;
            }
        }
    }

    return false;
}

console.log(convertString("ceoydefthf5iyg5h5yts", "codefights"));
console.log(convertString("addbyca", "abcd"));
console.log(convertString("ajavaifjsgjcgjruipt", "javascript"));
console.log(convertString("javaifjsgjcgjruip", "javascript"));

let t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");