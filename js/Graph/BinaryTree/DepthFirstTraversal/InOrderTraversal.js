// Used to traverse values in tree from left to right!

function inOrderTraversalUsingRecursion(node, cb) {
    if(node == null) {
        return;
    }
    inOrderTraversalUsingRecursion(node.left);
    cb ? cb(node) : console.log(node.value);
    inOrderTraversalUsingRecursion(node.right);
}

function toArray(tree) {
    const arr = [];
    inOrderTraversalUsingRecursion(tree, node => arr.push(node.value));
    return arr;
}

module.exports = {
    inOrderTraversalUsingRecursion,
    toArray
}