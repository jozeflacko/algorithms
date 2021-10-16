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
    children = []; // array with children
    constructor(value) {
        this.value = value;
    }
}

/**
 * Has 0..2 pointers to another nodes!
 *
 * Is an item in a DoublyLinkedList
 */
class BinaryNode {

    value = null;

    left = null;    // In DoublyLinkedList called "previous"
    right = null;   // In DoublyLinkedList called "next"

    constructor(value) {
        this.value = value;
    }
}

class TrieNode {
    value = null;
    children = {}; // instead of an array we use hashmap to easier access children!
    isEndOfWord = false;
    constructor(value) {
        this.value = value;
    }
}

module.exports = {
    Node,
    BinaryNode,
    TrieNode,
};