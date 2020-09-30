// nputArray = ["abc", "", "aaa", "a", "zz"]

// the output should be

// sortByLength(inputArray) = ["", "a", "zz", "abc", "aaa"]

// Hints

// sort()

function sortByLength(inputArray = []) {
    return inputArray.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["abc",
    "",
    "aaa",
    "a",
    "zz"
]));