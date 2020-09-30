// Given a string, output its longest prefix which contains only digits.

// Example

// For inputString="123aa1", the output should be longestDigitsPrefix(inputString) = "123".

// Hints

// split()
// includes()
// push()
// join()

function longestDigitsPrefix(inputString = "") {
    let result = [];
    let str = "";
    inputString.split("").forEach((el) => {
        if (!isNaN(el)) {
            str = str.concat(el);
        } else {

            if (str !== "") {
                result.push(str);
                str = "";
            }
        }
    });
    if (str !== "") {
        result.push(str);
        str = "";
    }

    let max = "";
    result.forEach((el, i) => {
        max = result[i].length > max.length ? result[i] : max;
    });
    return max;
}

console.log(longestDigitsPrefix("123aa1"));