// Data Structures: Reverse a Doubly Linked List
// Let 's create one more method for our doubly linked list called reverse which reverses the list in place. Once the method is executed the head should point to the previous tail and the tail should point to the previous head. Now, if we traverse the list from head to tail we should meet the nodes in a reverse order compared to the original list. Trying to reverse an empty list should return null.

// The DoublyLinkedList data structure should exist.

// The DoublyLinkedList should have a method called reverse.

// Reversing an empty list should
// return null.

// The reverse method should reverse the list.

// The next and previous references should be correctly maintained when a list is reversed.



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
    reverse() {
        let temp = null;
        let currentNode = this.head;

        if (this.head === null) {
            return null;
        }

        this.tail = currentNode;

        while (currentNode) {
            temp = currentNode.prev;
            currentNode.prev = currentNode.next;
            currentNode.next = temp;
            currentNode = currentNode.prev;
        }

        if (temp != null) {
            this.head = temp.prev;
        }

    }



}
const linked = new DoublyLinkedList();
linked.add(1);
linked.add(2);
linked.add(3);
linked.add(4);
linked