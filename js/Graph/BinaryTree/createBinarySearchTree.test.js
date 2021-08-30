const {createBinarySearchTree} = require('./createBinarySearchTree');

test('createTree', () => {
    const tree = createBinarySearchTree([5,4,9,2,6,8]);

    /*
              5
         4            9
      2         6
                   8
    */
    expect(tree.value).toEqual(5);
    expect(tree.left.value).toEqual(4);
    expect(tree.left.left.value).toEqual(2);
    expect(tree.right.value).toEqual(9);
    expect(tree.right.left.value).toEqual(6);
    expect(tree.right.left.right.value).toEqual(8);
});