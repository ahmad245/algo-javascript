// Flatten a nested array. You must account for varying levels of nesting.

// Example

// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4]

// Hints

// isArray()
// push()

// 

// create recursion  for not lost result array

function flattenArray(arr = []) {

    let result = [];
    flatten(arr)

    function flatten(arr) {
        arr.forEach((el) => {
            if (!Array.isArray(el)) {
                result.push(el);
            } else {
                flatten(el);
            }
        })
    }

    return result;
}

console.log(flattenArray([
    [
        ["a"]
    ],
    [
        ["b"]
    ]
]));
console.log(flattenArray([1, [2],
    [3, [
        [4]
    ]]
]));