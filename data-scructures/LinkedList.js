/**
 * Data Structure
 *
 * A Linear data structure have data elements arranged in sequential manner
 * and each member element is connected to its previous and/or next element.
 * This connection helps to traverse a linear data structure in a single level and in single run
 *
 * A linked list is a linear data structure, in which the elements
 * are not stored at contiguous memory locations.
 * The elements in a linked list are linked using pointers
 *
 *                                 Array      LinkedList
 * Cost of accessing                O(1)           O(n)
 * Insert remove beginning          O(n)           O(1)
 * Insert remove end                O(1)           O(n)
 * Insert remove middle             O(n)           O(n)
 *
 */
class SinglyLinkedList {
    value = null;
    next = null;

    constructor(value) {
        this.value = value;
    }
    setNext(next) {
        this.next = next;
    }
    getNext() {
        return this.next;
    }
}

class DoublyLinkedList extends SinglyLinkedList {
    previous = null;

    setPrevious(previous) {
        this.previous = previous;
    }
    getPrevious() {
        return this.previous;
    }
}

/**
 * Circular linked list is a linked list where all nodes are connected to form a circle.
 * There is no NULL at the end. A circular linked list can be a singly circular
 * linked list or doubly circular linked list.
 */
class CircularLinkedList extends SinglyLinkedList {

    firstNode = this;

    constructor(value) {
        super(value);
    }

    setNext(next) {
        this.next = next;
        this.next.firstNode = this.firstNode;
    }

    getNext() {
        return this.next || this.firstNode;
    }
}

module.exports = {
    SinglyLinkedList,
    DoublyLinkedList,
    CircularLinkedList,
};