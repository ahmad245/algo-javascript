// Data Structures: Check
// if an Element is Present in a Binary Search Tree
// Now that we have a general sense of what a binary search tree is
// let 's talk about it in a little more detail. Binary search trees provide logarithmic time for the common operations of lookup, insertion, and deletion in the average case, and linear time in the worst case. Why is this? Each of those basic operations requires us to find an item in the tree (or in the case of insertion to find where it should go) and because of the tree structure at each parent node we are branching left or right and effectively excluding half the size of the remaining tree. This makes the search proportional to the logarithm of the number of nodes in the tree, which creates logarithmic time for these operations in the average case. Ok, but what about the worst case? Well, consider constructing a tree from the following values, adding them left to right: 10, 12, 17, 25. Following our rules for a binary search tree, we will add 12 to the right of 10, 17 to the right of this, and 25 to the right of this. Now our tree resembles a linked list and traversing it to find 25 would require us to traverse all the items in linear fashion. Hence, linear time in the worst case. The problem here is that the tree is unbalanced. We'
// ll look a little more into what this means in the following challenges.

// In this challenge, we will create a utility
// for our tree.Write a method isPresent which takes an integer value as input and returns a boolean value
// for the presence or absence of that value in the binary search tree.

// The BinarySearchTree data structure should exist.

// The binary search tree should have a method called isPresent.

// The isPresent method should correctly check
// for the presence or absence of elements added to the tree.

// isPresent should handle cases where the tree is empty.



class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.rigth = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    add(element) {
        let curr = this.root;

        if (!curr) {
            this.root = new Node(element);
            return undefined;
        };

        while (curr) {
            if (element < curr.value) {
                if (!curr.left) {
                    curr.left = new Node(element);
                    return undefined;
                }
                curr = curr.left;
            } else if (element > curr.value) {
                if (!curr.right) {
                    curr.right = new Node(element);
                    return undefined;
                }
                curr = curr.right;
            } else return null;
        }
    }

    findMax() {
        if (!this.root) return null;
        let curr = this.root;
        while (curr) {
            if (!curr.right) {
                return curr.value;
            }
            curr = curr.right;
        }
    }
    findMin() {
        if (!this.root) return null;
        let curr = this.root;
        while (curr) {
            if (!curr.left) {
                return curr.value;
            }
            curr = curr.left;
        }
    }
    isPresent(element) {
        let curr = this.root;

        if (!curr) {
            return false;
        };

        while (curr) {
            if (element < curr.value) {
                curr = curr.left;
            } else if (element > curr.value) {
                curr = curr.right;
            }
            if (curr && element == curr.value) {
                return true;
            };
        }
        return false
    }




}
let bs = new BinarySearchTree();
bs.add(10);
bs.add(5);
bs.add(15);
bs.findMax();
bs.findMin();
bs.isPresent(5);

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));