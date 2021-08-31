const {createBinarySearchTree} = require('../Graph/BinaryTree/createBinarySearchTree');
const {cloneTree, toArrayPreOrder} = require('../Graph/BinaryTree/DepthFirstTraversal/preOrderTraversal');

it('clone tree using pre-order traversal ', () => {

    /*
              5
         4            9
      2         6
                   8
    */
    const tree = createBinarySearchTree([5,4,9,2,6,8]);

    const treeAsString = toArrayPreOrder(tree).toString();
    expect(treeAsString).toEqual('5,4,2,9,6,8');

    const clone = cloneTree(tree);
    const cloneAsString = toArrayPreOrder(clone).toString();

    expect(treeAsString).toEqual(cloneAsString);
});