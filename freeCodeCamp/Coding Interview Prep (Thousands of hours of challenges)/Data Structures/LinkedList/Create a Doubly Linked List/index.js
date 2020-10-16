// Data Structures: Create a Doubly Linked List
// All of the linked lists we 've created so far are singly linked lists. Here, we'
// ll create a doubly linked list.As the name implies, nodes in a doubly linked list have references to the next and previous node in the list.

// This allows us to traverse the list in both directions but it also requires more memory to be used because every node must contain an additional reference to the previous node in the list.

// We 've provided a Node object and started our DoublyLinkedList. Let'
// s add two methods to our doubly linked list called add and remove.The add method should add the given element to the list
// while the remove method should remove all occurrences of a given element in the list.

// Be careful to handle any possible edge cases when writing these methods, such as deletions
// for the first or last element.Also, removing any item on an empty list should
// return null.

// The DoublyLinkedList data structure should exist.

// The DoublyLinkedList should have a method called add.

// The DoublyLinkedList should have a method called remove.

// Removing an item from an empty list should
// return null.

// The add method should add items to the list.

// Each node should keep track of the previous node.

// The first item should be removable from the list.

// The last item should be removable from the list.



class Node {
    constructor(data, prev) {
        this.data = data;
        this.prev = prev;
        this.next = null;
    }

}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    add(element) {

        if (this.head) {


            let node = new Node(element, this.tail);
            this.tail.next = node
            this.tail = node
        }
        if (!this.head) {

            this.head = new Node(element, this.head);
            this.tail = this.head;
        }


    }
    remove(element) {
        if (this.head == null) return null;
        if (this.head.data === element) {
            this.head = this.head.next;
            this.tail = this.head;
            return;
        }
        if (this.tail.data === element) {
            this.tail = this.tail.prev;
            this.tail.next = null;
            return;
        }

        let prevNode = this.head;

        while (prevNode) {
            let nextNode = prevNode.next;
            if (nextNode) {
                if (nextNode.data === element) {
                    prevNode.next = nextNode.next;
                    nextNode.next.prev = prevNode;
                    nextNode.prev = null;
                    return this.length--;
                }
            }
            prevNode = nextNode;
        }
    }

}
const linked = new DoublyLinkedList();
linked.add(1);
linked.add(2);
linked.add(3);
linked.add(4);
linked