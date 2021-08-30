const {postOrderTraversalUsingRecursion} = require('.//DepthFirstTraversal/PostOrderTraversal')

// for deletion a whole tree we can use postOrderTraversal
function deleteWholeTree(tree) {
    postOrderTraversalUsingRecursion(tree, node => {
        node.left = null;
        node.right = null;
    });
}