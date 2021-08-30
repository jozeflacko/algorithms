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