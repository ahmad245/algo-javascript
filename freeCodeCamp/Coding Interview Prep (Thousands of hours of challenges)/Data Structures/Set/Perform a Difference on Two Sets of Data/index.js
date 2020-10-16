// Data Structures: Perform a Difference on Two Sets of Data
// In this exercise we are going to perform a difference on 2 sets of data. We will create a method on our Set data structure called difference. 
// A difference of sets should compare two sets and return the items present in the first set that are absent in the second.
//  This method should take another Set as an argument and return the difference of the two sets.

// For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the difference of setA and setB is: setA.difference(setB) = ['c'].

// Your Set class should have a difference method.

// Your difference method should return the proper collection.

class Set {
    constructor() {
            // This will hold the set
            this.dictionary = {};
            this.length = 0;
        }
        // This method will check for the presence of an element and return true or false
    has(element) {
            return this.dictionary[element] !== undefined;
        }
        // This method will return all the values in the set
    values() {
            return Object.keys(this.dictionary);
        }
        // This method will add an element to the set
    add(element) {
            if (!this.has(element)) {
                this.dictionary[element] = true;
                this.length++;
                return true;
            }

            return false;
        }
        // This method will remove an element from a set
    remove(element) {
            if (this.has(element)) {
                delete this.dictionary[element];
                this.length--;
                return true;
            }

            return false;
        }
        // This method will return the size of the set
    size() {
            return this.length;
        }
        // This is our union method 
    union(set) {
            const newSet = new Set();
            this.values().forEach(value => {
                newSet.add(value);
            })
            set.values().forEach(value => {
                newSet.add(value);
            })

            return newSet;
        }
        // This is our intersection method
    intersection(set) {
        const newSet = new Set();

        let largeSet;
        let smallSet;
        if (this.dictionary.length > set.length) {
            largeSet = this;
            smallSet = set;
        } else {
            largeSet = set;
            smallSet = this;
        }

        smallSet.values().forEach(value => {
            if (largeSet.dictionary[value]) {
                newSet.add(value);
            }
        })

        return newSet;
    }
    difference(set) {
        const newSet = new Set();
        this.values().forEach(value => {
            if (!set.has(value)) {
                newSet.add(value);
            }
        })
        return newSet;
    }
}