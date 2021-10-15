const {Node} = require('../../../Node');
const {addChildNode} = require('../createBinarySearchTree');

// used to clone tree
// or for polish notation (prefix notation)

function preOrderTraversalUsingRecursion(node, cb) {
    if(node == null) {
        return;
    }

    cb ? cb(node) : console.log(node.value);
    preOrderTraversalUsingRecursion(node.left, cb);
    preOrderTraversalUsingRecursion(node.right, cb);

}

function cloneTree(tree) {
    let cloneTree = null;

    preOrderTraversalUsingRecursion(tree, node => {

        if(cloneTree == null) {
            cloneTree = new Node(node.value);
        } else {
            addChildNode(cloneTree, node.value);
        }
    });

    return cloneTree;
}

function toArrayPreOrder(tree) {
    const arr = [];
    preOrderTraversalUsingRecursion(tree, node => arr.push(node.value));
    return arr;
}

module.exports = {
    toArrayPreOrder,
    cloneTree,
    preOrderTraversalUsingRecursion
}