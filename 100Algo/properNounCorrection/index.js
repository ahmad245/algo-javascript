// Proper nouns always begin with a capital letter, followed by small letters.

// Correct a given proper noun so that it fits this statement.

// Example

// For noun = "pARiS", the output should be properNounCorrection(noun) = "Paris";

// For noun = "John", the output should be properNounCorrection(noun) = "John".

// Hints

// toUpperCase()
// toLowerCase()
// concat()
// slice()


function properNounCorrection(noun = '') {
    return noun.slice(0, 1).toUpperCase().concat(noun.slice(1).toLowerCase())
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));