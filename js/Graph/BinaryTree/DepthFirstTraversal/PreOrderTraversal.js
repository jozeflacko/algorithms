const Node = require('../../../Node');
const {addChildNode} = require('../createBinarySearchTree');

// used to clone tree
// or for polish notation (prefix notation)

function preOrderTraversalUsingRecursion(node, cb) {
    if(node == null) {
        return;
    }
    preOrderTraversalUsingRecursion(node.left);
    preOrderTraversalUsingRecursion(node.right);
    cb ? cb(node) : console.log(node.value);
}

function cloneTree(tree) {
    let clone = new Node(tree.value);
    preOrderTraversalUsingRecursion(tree, node => addChildNode(clone, node.value));
    return clone;
}

function toArray(tree) {
    const arr = [];
    preOrderTraversalUsingRecursion(tree, node => arr.push(node.value));
    return arr;
}

module.exports = {
    toArrayPreOrder: toArray,
    cloneTree,
    preOrderTraversalUsingRecursion
}