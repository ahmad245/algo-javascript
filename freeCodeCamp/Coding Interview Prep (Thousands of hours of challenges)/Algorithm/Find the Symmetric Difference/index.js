// Algorithms: Find the Symmetric Difference
// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both.
// For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. 
//So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time.
// Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

// Create a function that takes two or more arrays and returns an array of their symmetric difference.
// The returned array must contain only unique values (no duplicates).

// sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
// sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
// sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5].
// sym([1, 2, 3, 3], [5, 2, 1, 4]) should contain only three elements.
// sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5].
// sym([1, 2, 3], [5, 2, 1, 4, 5]) should contain only three elements.
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9]
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.


const sym = (...args) => {
    let result = [];
    result.push(...symTowArray(args[0], args[1]));

    if (result.length > 0) {
        for (let i = 2; i < args.length; i++) {
            result = symTowArray(result, args[i])
        }
    }
    return result;

}

const symTowArray = (arr1 = [], arr2 = []) => {
    let result = [];
    let maxLength, minLength;
    if (arr1.length > arr2.length) {
        maxLength = [...new Set(arr1)];
        minLength = [...new Set(arr2)];
    } else {
        maxLength = [...new Set(arr2)];
        minLength = [...new Set(arr1)];
    }

    maxLength.forEach((el, index) => {
        if (minLength.indexOf(el) === -1) {
            result.push(el);

        } else {
            minLength.splice(minLength.indexOf(el), 1);
        }
    })

    result.push(...minLength);
    return result;

}

sym([1, 2, 3], [5, 2, 1, 4]);

module.exports = sym;