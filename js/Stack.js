/**
 *  Data Structure
 *
 *  Last-In-First-Out (LIFO)
 *
 *  Can be done with an array or with a linked list
 */
class Stack {
    
    arr = [];
    
    add(what) {
        this.arr.push(what);
    }
    remove() {
        return this.arr.pop();
    }
    isEmpty() {
        return this.arr.length === 0;
    }
}

module.exports = Stack;
