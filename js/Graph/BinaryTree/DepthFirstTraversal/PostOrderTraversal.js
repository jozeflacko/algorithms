// using to delete nodes
// or for reverse polish notation (postfix notation)

function postOrderTraversalUsingRecursion(node, cb = null) {
    if(node == null) {
        return;
    }
    postOrderTraversalUsingRecursion(node.left);
    postOrderTraversalUsingRecursion(node.right);
    cb ? cb(node) : console.log(node.value);
}

module.exports = {
    postOrderTraversalUsingRecursion
}