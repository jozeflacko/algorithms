/**
 * Data Structure
 *
 *
 * Binary Node with maximally 2 pointers
 * Is is a Doubly Linked List!
 *
 * has value which holds the value
 * and 2 references pointing to another nodes
 *
 * A starting point is called ROOT
 * A node without pointers is called LEAF
 *
 */
class Node {

    value = null;

    left = null;
    right = null;

    constructor(value) {
        this.value = value;
    }
}

module.exports = Node;