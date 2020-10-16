// Data Structures: Search within a Linked List
// Let 's add a few more useful methods to our linked list class. Wouldn'
// t it be useful
// if we could tell
// if our list was empty or not, as with our Stack and Queue classes ?

//     We should also be able to find specific elements in our linked list.Traversing through data structures is something you 'll want to get a lot of practice with! Let'
// s create an indexOf method that takes an element as an argument, and returns that element 's index in the linked list. If the element is not found in the linked list, return -1.

// Let 's also implement a method that does the opposite: an elementAt method that takes an index as an argument and returns the element at the given index. If no element is found, return undefined.

// Write an isEmpty method that checks
// if the linked list is empty, an indexOf method that returns the index of a given element, and an elementAt that returns an element at a given index.

// Your LinkedList class should have an isEmpty method.

// Your isEmpty method should
// return false when there is at least one element in linked list.

// Your isEmpty method should
// return true when there are no elements in linked list.

// Your LinkedList class should have an indexOf method.

// Your indexOf method should
// return the index of a given element found in linked list.

// Your indexOf method should
// return -1
// if the given element is not found in linked list

// Your LinkedList class should have an elementAt method.

// Your elementAt method should
// return the element found at a given index in linked list.

// Your elementAt method should
// return undefined
// if the given element is not found at a given index in linked list.

// 123456789101112131415161718192021222324252627282930



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

    size() {
        return this.length;
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
}

let linked = new LinkedList()

linked.add(1)

linked.add(2)
linked.add(3)
linked.add(4)

linked.length
linked.indexOf(2);
linked.elementAt(0)

//linked.remove(2)