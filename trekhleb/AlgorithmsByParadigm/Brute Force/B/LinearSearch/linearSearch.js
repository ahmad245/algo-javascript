// In computer science, linear search or sequential search is a method for finding a target value within a list.
// It sequentially checks each element of the list for the target value until a match is found or until all the elements have been searched. 
//Linear search runs in at worst linear time and makes at most n comparisons, where n is the length of the list.

// Linear Search

// Complexity
// Time Complexity: O(n) - since in worst case we're checking each element exactly once.


const Comparator = require('../../../../utile/Comparator/Comparator');

module.exports.linearSearch = (array = [], seekElement, comparatorCallback) => {
    const comparator = new Comparator(comparatorCallback);

    let foundList = [];

    array.forEach((el, index) => {
        if (comparator.equal(el, seekElement)) foundList.push(index);
    })
    return foundList;

}