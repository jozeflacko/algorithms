const {Node} = require('../../Node');

// Special type of graph is a tree where a node has maximally 2 children nodes
// We know:
// - full binary tree
// - complete binary tree
// - perfect binary tree -> all
// - pathological tree

/*
          5
     4            9
  2         6
               8
*/
function createBinarySearchTree(values) {

    const rootNode = new Node(values[0]);

    values
        .filter((value,index) => index !== 0) // skip first value;
        .forEach(value => addChildNode(rootNode, value));

    return rootNode;
}

function addChildNode(node, newValue) {

    const direction = newValue < node.value ? 'left' : 'right';

    let child = node[direction];

    if(child == null) {
        node[direction] = new Node(newValue);
    } else {
        addChildNode(child, newValue);
    }
}

module.exports = {
    createBinarySearchTree,
    addChildNode,
};