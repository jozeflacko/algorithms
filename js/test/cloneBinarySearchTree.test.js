const {createBinarySearchTree} = require('../Graph/BinaryTree/createBinarySearchTree');
const {cloneTree, toArrayPreOrder} = require('../Graph/BinaryTree/DepthFirstTraversal/PreOrderTraversal');

it('clone tree using pre-order traversal ', () => {

    const tree = createBinarySearchTree([5,3,9,7,4,5]);
    const clone = cloneTree(tree);

    expect(tree).toEqual(clone);
});