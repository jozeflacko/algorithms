const {deleteWholeTree} = require('../Graph/BinaryTree/deleteWholeTree');
const {createBinarySearchTree} = require('../Graph/BinaryTree/createBinarySearchTree');

it('deleteWholeTree', () => {
    const tree = createBinarySearchTree([5,6,9,1,0,5]);
    expect(tree).not.toEqual({});
    deleteWholeTree(tree);
    expect(tree).toEqual({});
});