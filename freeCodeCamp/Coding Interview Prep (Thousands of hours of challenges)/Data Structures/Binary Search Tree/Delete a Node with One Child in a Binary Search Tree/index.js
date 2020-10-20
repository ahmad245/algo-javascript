// Delete a Node with One Child in a Binary Search Tree
// Now that we can delete leaf nodes let's move on to the second case: deleting a node with one child. For this case, say we have a tree with the following nodes 1 — 2 — 3 where 1 is the root. To delete 2, we simply need to make the right reference in 1 point to 3. More generally to delete a node with only one child, we make that node's parent reference the next node in the tree.

// We've provided some code in our remove method that accomplishes the tasks from the last challenge. We find the target to delete and its parent and define the number of children the target node has. Let's add the next case here for target nodes with only one child. Here, we'll have to determine if the single child is a left or right branch in the tree and then set the correct reference in the parent to point to this node. In addition, let's account for the case where the target is the root node (this means the parent node will be null). Feel free to replace all the starter code with your own as long as it passes the tests.

// The BinarySearchTree data structure should exist.

// The binary search tree should have a method called remove.

// Trying to remove an element that does not exist should return null.

// If the root node has no children, deleting it should set the root to null.

// The remove method should remove leaf nodes from the tree.

// The remove method should remove nodes with one child.

// Removing the root in a tree with two nodes should set the second to be the root.

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

    remove(value) {
        if (!this.root) return null;
        if (this.root.value == value) {
            if (this.root.right) {
                this.root = this.root.right;
                return;
            }
            if (this.root.left) {
                this.root = this.root.left;
                return;
            }
            this.root = null;
            return;
        }

        let curr = this.root;
        while (curr) {
            if (curr.value > value) {

                if (curr.left && curr.left.value == value) {

                    curr.left = null;

                    return;
                }
                curr = curr.left;
            }
            if (curr.value < value) {
                if (curr.right && curr.right.value == value) {
                    curr.right = null;
                    return;
                }

                curr = curr.right;
            }
            if (curr && curr.value == value) {
                curr = null;
                break;

            }
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
bs.add(8);
bs.add(9);
bs.add(20);
bs.add(25);
bs.add(12);


bs.levelOrder();
bs.reverseLevelOrder();




var displayTree = tree => console.log(JSON.stringify(tree, null, 2));