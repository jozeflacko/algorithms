class Queue {
    arr = [];
    add(what) {
        this.arr.push(what);
    }
    remove() {
        return this.arr.shift();
    }
    isEmpty() {
        return this.arr.length === 0;
    }
}

module.exports = Queue;