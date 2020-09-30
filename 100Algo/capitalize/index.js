// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    return solution2(str);
}

function solution1(str = "") {
    return str.split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(' ');
}

function solution2(str = "") {
    let result = str[0].toUpperCase();

    for (let index = 1; index < str.length; index++) {
        if (str[index - 1] == ' ') {
            result += str[index].toUpperCase();
        } else {
            result += str[index]
        }

    }
    return result;

}

module.exports = capitalize;