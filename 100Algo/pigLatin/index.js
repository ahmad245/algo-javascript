// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

// Example

// pigLatin("glove") should return "oveglay".
// pigLatin("eight") should return "eightway".
// Hints

// split()
// test()
// join()
// push()

function pigLatin(str = "") {
    let vowel = ["e", "i", "o", "y", "a"];
    let arr = str.split("");
    let result = [];

    if (vowel.includes(str[0])) return str.concat('way');
    for (let i = 0; i < arr.length; i++) {
        if (!vowel.includes(arr[i])) {
            result.push(arr.splice(0, 1)[0]);
        }

    }
    result.forEach((el) => arr.push(el));
    arr.push('ay')
    return arr.join('');
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));