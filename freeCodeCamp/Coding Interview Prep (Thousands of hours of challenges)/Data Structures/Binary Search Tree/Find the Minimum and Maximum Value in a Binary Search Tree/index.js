// Search Tree
// In this challenge you will define two methods, findMin and findMax.These methods should
// return the minimum and maximum value held in the binary search tree(don 't worry about adding values to the tree for now, we have added some in the background). If you get stuck, reflect on the invariant that must be true for binary search trees: each left subtree is less than or equal to its parent and each right subtree is greater than or equal to its parent. Let'
//         s also say that our tree can only store integer values.If the tree is empty, either method should
//         return null.

//         The BinarySearchTree data structure should exist.

//         The binary search tree should have a method called findMin.

//         The binary search tree should have a method called findMax.

//         The findMin method should
//         return the minimum value in the binary search tree.

//         The findMax method should
//         return the maximum value in the binary search tree.

//         The findMin and findMax methods should
//         return null
//         for an empty tree.



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




}
let bs = new BinarySearchTree();
bs.add(10);
bs.add(5);
bs.add(15);
bs.findMax();
bs.findMin()

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));