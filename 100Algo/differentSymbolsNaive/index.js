// Given a string, find the number of different characters in it.

// Example

// For s = "cabca", the output should be differentSymbolsNaive(s) = 3.

// There are 3 different characters a, b and c.

// Hints

// includes()
// split()
// push()

function differentSymbolsNaive(s = '') {
    let result = new Set(s.split(''));
    return result.size;
}

console.log(differentSymbolsNaive('cabca'));