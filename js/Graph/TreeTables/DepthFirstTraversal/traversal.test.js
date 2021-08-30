const {createTree} = require('../createTree');
const {cloneTree, toArrayPreOrder} = require('./PreOrderTraversal');

it('clone tree using pre-order traversal ', () => {

    const tree = createTree([5,3,9,7,4,5]);
    const clone = cloneTree(tree);

    console.log('tree', toArrayPreOrder(tree))
    console.log('clone', toArrayPreOrder(clone))
});