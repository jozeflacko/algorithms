const Queue = require('../../../Queue');

// breath-first traversal
// time complexity is O(n) where n is number of nodes
function levelOrderTraversal(root, cb = null) {
    const queue = new Queue();
    queue.add(root);

    while (!queue.isEmpty()) {
        const node = queue.remove();
        cb ? cb(node) : console.log(node.value);
        node.left && queue.add(node.left);
        node.right && queue.add(node.right);
    }
}

function toArray(tree) {
    const arr = [];
    levelOrderTraversal(tree, node => arr.push(node.value));
    return arr;
}

module.exports = {
    levelOrderTraversal,
    toArray,
}
