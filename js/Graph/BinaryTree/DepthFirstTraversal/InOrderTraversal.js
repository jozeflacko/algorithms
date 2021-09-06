/** 
    Used to traverse values in tree from left to right!
*/

function inOrderTraversalUsingRecursion(node, callback) {
    if(node == null) {
        return;
    }
    inOrderTraversalUsingRecursion(node.left, callback);
    callback ? callback(node) : console.log(node.value);
    inOrderTraversalUsingRecursion(node.right, callback);
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
