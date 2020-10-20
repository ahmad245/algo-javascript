// Delete a Leaf Node in a Binary Search Tree
// This is the first of three challenges where we will implement a more difficult operation in binary search trees: deletion.
// Deletion is difficult because removing nodes breaks links in the tree. These links must be carefully reestablished to ensure the binary tree structure is maintained. For some deletions, this means the tree must be rearranged. In general, you will encounter one of three cases when trying to delete a node: 
//Leaf Node: The target to delete has zero children. One Child: The target to delete only has one child. Two Children: The target to delete has two child nodes. Removing a leaf node is easy, we simply remove it. Deleting a node with one child is also relatively easy, we simply remove it and link its parent to child of the node we deleted. Removing a node with two children is more difficult, however, because this creates two child nodes that need to be reconnected to the parent tree. We'll see how to deal with this case in the third challenge. Additionally, you need to be mindful of some edge cases when handling deletion. What if the tree is empty? What if the node to delete is the root node? What if there are only two elements in the tree? For now, let's handle the first case where we delete a leaf node.

// Create a method on our binary tree called remove. We'll build the logic for our deletion operation in here. First, you'll want to create a function within remove that finds the node we are trying to delete in the current tree. If the node is not present in the tree, remove should return null. Now, if the target node is a leaf node with no children, then the parent reference to it should be set to null. This effectively deletes the node from the tree. To do this, you will have to keep track of the parent of the node we are trying to delete as well. It will also be useful to create a way to track the number of children the target node has, as this will determine which case our deletion falls under. We will handle the second and third cases in the next challenges. Good luck!

// The BinarySearchTree data structure should exist.

// The binary search tree should have a method called remove.

// Trying to remove an element that does not exist should return null.

// If the root node has no children, deleting it should set the root to null.

// The remove method should remove leaf nodes from the tree.



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