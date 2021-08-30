// using to delete nodes
// or for reverse polish notation (postfix notation)

function postOrderTraversalUsingRecursion(root) {
    if(root == null) {
        return;
    }
    postOrderTraversalUsingRecursion(root.left);
    postOrderTraversalUsingRecursion(root.right);
    console.log(root.value);
}