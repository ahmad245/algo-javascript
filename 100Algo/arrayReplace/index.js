// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

// Example

// For inputArray = [1, 2, 1], elemToReplace = 1 and substitutionElem = 3, the output should be arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].

function arrayReplace(inputArray = [], elemToReplace = 1, substitutionElem = 3) {
    inputArray.forEach((el, index) => {
        if (el === elemToReplace) {
            inputArray[index] = substitutionElem;
        }
    });
    return inputArray;
}


console.log(arrayReplace([1, 2, 1], 1, 3));