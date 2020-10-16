// Data Structures: Check
// if Tree is Binary Search Tree
// Since you already know what a binary search tree is, this challenge will establish how it is you can tell that a tree is a binary search tree or not.

// The main distinction of a binary search tree is that the nodes are ordered in an organized fashion.Nodes have at most 2 child nodes(placed to the right and / or left) based on
// if the child node 's value is greater than or equal to (right) or less than (left) the parent node.

// In this challenge, you will create a utility
// for your tree.Write a JavaScript method isBinarySearchTree which takes a tree as an input and returns a boolean value
// for whether the tree is a binary search tree or not.Use recursion whenever possible.

// Your Binary Search Tree should
// return true when checked with isBinarySearchTree().


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

const checkTree = (tree) => {
    let isBt = true;
    if (tree.left) {
        if (tree.value < tree.left.value) {
            isBt = false;
        } else {
            checkTree(tree.left);
        }
    }
    if (tree.rigth) {
        if (tree.value > tree.right.value) {
            isBt = false;
        } else {
            checkTree(tree.right)
        }
    }
    return isBt;

}

function isBinarySearchTree(tree) {

    if (tree.root == null) {
        return null;
    }
    return checkTree(tree.root);
}