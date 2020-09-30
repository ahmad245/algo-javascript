const maxLength = (arr) => {
    let max = 0;
    for (const item of arr) {
        if (max < item.length) {
            max = item.length;
        }
    }
    return max;
}

const allLongestStrings = (inputArray = ["aba", "aa", "ad", "vcd", "aba"]) => {
    const max = maxLength(inputArray);
    let result = [];
    inputArray.forEach((el) => {
        if (el.length == max) result.push(el);
    });
    return result;

}


// solution 2 
function allLongestStrings2(inputArray) {
    inputArray = inputArray.sort((a, b) => b.length - a.length) // Sort by length of characters

    const longestArray = inputArray.filter((string) => {
        return string.length >= inputArray[0].length;
    });

    return longestArray;
}