const Queue = require('../../../Queue');

// breath-first traversal -> will return sorted value from smallest to biggest
// time complexity is O(n) where n is number of nodes
function levelOrderTraversal(root) {
    const queue = new Queue();
    queue.add(root);

    while (!queue.isEmpty()) {
        const node = queue.remove();
        console.log(node.value);
        node.left && queue.add(node.left);
        node.right && queue.add(node.right);
    }
}
