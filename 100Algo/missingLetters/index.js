// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// Example

// missingLetters("abce") should return "d".
// missingLetters("abcdefghjklmno") should return "i".
// missingLetters("abcdefghijklmnopqrstuvwxyz") should return undefined.
// Hints

// split()

function missingLetters(str = '') {
    let arr = str.split('');
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === 'z') return undefined;
        let next = nextChar(arr[i]);
        if (arr[i + 1] !== next) return next
    }
    return undefined;
}

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}
console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));