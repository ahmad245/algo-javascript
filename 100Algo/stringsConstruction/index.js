// How many strings equal to a can be constructed using letters from the string b? Each letter can be used only once and in one string only.

// Example For a = "abc" and b = "abccba", the output should be stringsConstruction(a, b) = 2.

// We can construct 2 strings a with letters from b.

// Hints

// hasOwnProperty()
// push()
// Math.floor()
// Math.min()
// split()


function stringsConstruction(a = '', b = '') {
    let objB = {};
    let objA = {};
    let count = [];
    for (const item of b) {
        objB[item] = objB[item] + 1 || 1
    }
    for (const item of a) {
        objA[item] = objA[item] + 1 || 1
    }

    for (const key in objA) {
        if (objB.hasOwnProperty(key)) {
            count.push(Math.floor(objB[key] / objA[key]))

        } else {
            return 0
        }
    }
    return Math.min(...count);




}

console.log(stringsConstruction('abc', 'abccba'));