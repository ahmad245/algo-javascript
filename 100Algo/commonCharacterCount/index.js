// Given two strings s1 and s2 consisting of lowercase English alphabets,
// the task is to count all the pairs of indices (i, j) from the given strings such that s1[i] = s2[j] and all the indices are distinct i.e
//. if s1[i] pairs with some s2[j] then these two characters will not be paired with any other character.

// Example

// Input: s1 = “abcd”, s2 = “aad”
// Output: 2
// (s1[0], s2[0]) and (s1[3], s2[2]) are the only valid pairs.
// (s1[0], s2[1]) is not includes because s1[0] has already been paired with s2[0]

// Input: s1 = “geeksforgeeks”, s2 = “platformforeeks”
//1+1+1+1+1+1+1+  1
// Output: 8


function commonCharacterCount(s1 = '', s2 = '') {
    let s1Array = s1.split('');
    let s2Array = s2.split('');

    let count = 0;

    s1Array.forEach((el) => {
        if (s2Array.includes(el)) {
            count++;
            s2Array.splice(s2Array.indexOf(el), 1);
        }
    })
    return count;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));