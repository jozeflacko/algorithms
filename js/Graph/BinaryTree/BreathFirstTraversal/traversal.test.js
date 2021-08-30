const {createBinarySearchTree} = require('../createBinarySearchTree');
const {toArray} = require('./levelOrderTraversal');

it('level order traversal', () => {
    const tree = createBinarySearchTree( [5,3,6,7,9,2]);
    /*
                 5
           3        6
              2         7
                            9
     */
    expect(toArray(tree).toString()).toEqual([5,3,6,2,7,9].toString());
});