// Data Structures: Add Elements at a Specific Index in a Linked List
// Let's create a addAt(index,element) method that adds an element at a given index. Just like how we remove elements at a given index, we need to keep track of the currentIndex as we traverse the linked list. When the currentIndex matches the given index, we would need to reassign the previous node's next property to reference the new added node. And the new node should reference the next node in the currentIndex. Returning to the conga line example, a new person wants to join the line, but he wants to join in the middle. You are in the middle of the line, so you take your hands off of the person ahead of you. The new person walks over and puts his hands on the person you once had hands on, and you now have your hands on the new person.

// Create an addAt(index,element) method that adds an element at a given index. Return false if an element could not be added. Note: Remember to check if the given index is a negative or is longer than the length of the linked list.

// Your addAt method should reassign head to the new node when the given index is 0.

// Your addAt method should increase the length of the linked list by one for each new node added to the linked list.

// Your addAt method should return false if a node was unable to be added.

class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }

}
class LinkedList {
    constructor() {
        this.length = 0;
        this.header = null;
    }
    head() {
        return this.header
    }
    add(element) {
        const node = new Node(element);
        if (this.header) {
            let current = this.header;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        } else {
            this.header = node;
        }
        this.length++;
    }
    addAt(index, element) {
        if (index < -1 || index > this.size()) {
            return false;
        }
        const node = new Node(element);
        if (index == 0) {
            if (this.header) {
                let prev = this.header.next;
                this.header = node;
                this.header.next = prev;
                this.length++;
                return;
            } else {
                this.header = node;
                this.length++;
                return;
            }
        } else {
            let current = this.header;
            let count = 1;
            while (current.next != null) {
                if (count == index) {
                    current.next = node;
                    this.length++;
                    return;
                } else {
                    current = current.next;
                }
            }
        }
        this.length++;
        return false;

    }

    size() {
        return this.length;
    }


    isEmpty() {
        return this.size() === 0;
    }
    indexOf(element) {
        let counter = 1;
        let current = this.header.next;
        if (this.header.element == element) return 0;
        while (current != null) {
            if (current.element === element) {
                return counter;
            }
            current = current.next;
            counter++;
        }
        return -1;
    }
    elementAt(index) {
        let counter = 1;
        let current = this.header.next;
        if (index == 0) return this.header.element;
        while (current != null) {
            if (counter == index) {
                return current.element;
            }
            current = current.next;
            counter++;
        }
    }
    remove(element) {
        if (this.header.element === element) {
            this.header = this.header.next;
            return this.length--;
        }

        let prevNode = this.header;

        while (prevNode) {
            let nextNode = prevNode.next;
            if (nextNode) {
                if (nextNode.element === element) {
                    prevNode.next = nextNode.next;
                    return this.length--;
                }
            }
            prevNode = nextNode;
        }
    }
    removeAt(index) {

        if (index == 0) {
            let firstElement = this.header.element;
            this.header = this.header.next;
            this.length--;
            return firstElement;
        }

        let prevNode = this.header;
        let count = 1;
        while (prevNode) {
            let nextNode = prevNode.next;
            if (nextNode) {
                if (index == count) {
                    prevNode.next = nextNode.next;
                    this.length--;
                    return nextNode.element
                }
            }
            prevNode = nextNode;
            count++;

        }
        return null;
    }
}

let linked = new LinkedList()

linked.add(1)

linked.add(2)
linked.add(3)
linked.add(4)

// linked.length
// linked.indexOf(2);
// linked.elementAt(0);
linked.removeAt(1);

//linked.remove(2)