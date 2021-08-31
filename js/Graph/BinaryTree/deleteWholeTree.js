const {postOrderTraversalUsingRecursion} = require('.//DepthFirstTraversal/PostOrderTraversal')

// for deletion a whole tree we can use postOrderTraversal
function deleteWholeTree(tree) {
    const arr = [];
    postOrderTraversalUsingRecursion(tree, node => {
        arr.push(node.value);
        delete node.left;
        delete node.right;
        delete node.value;
    });
    console.log('deleted tree nodes in this order ', arr);
    return tree;
}

module.exports = {
    deleteWholeTree
}