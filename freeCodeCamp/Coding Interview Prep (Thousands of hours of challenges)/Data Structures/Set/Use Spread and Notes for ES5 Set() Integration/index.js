// Data Structures: Use Spread and Notes
// for ES5 Set() Integration
// Do you remember the ES6 spread operator... ?

//     ...can take iterable objects in ES6 and turn them into arrays.

// Let 's create a Set, and check out the spread function.

// var set = new Set([1, 2, 3]);
// var setToArr = [...set]
// console.log(setToArr) // returns [ 1, 2, 3 ]
// In this exercise we will pass a set object to the checkSet
// function.It should
// return an array containing the values of the Set.

// Now you 've successfully learned how to use the ES6 Set() object, good job!

// checkSet(new Set([1, 2, 3, 4, 5, 6, 7]) should
//         return [1, 2, 3, 4, 5, 6, 7].

function checkSet(set) {
    return [...set]
}