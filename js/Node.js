/**
 * Data Structure
 *
 */

/**
 * Node can have 0..n pointers to another node
 * Node is an item in a Linked List!
 */
class Node {
    value = null;

    constructor(value) {
        this.value = value;
    }
}

/**
 * Has 0..2 pointers to another nodes!
 *
 * Is an item in a DoublyLinkedList
 */
class BinaryNode extends Node {
    left = null;    // In DoublyLinkedList called "previous"
    right = null;   // In DoublyLinkedList called "next"
}

module.exports = {
    Node,
    BinaryNode,
};