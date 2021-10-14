/**
 * A tree is also one of the data structures that represent hierarchical data.
 *
 * Tree has a root node and children nodes. Last node is called leaf
 * There can be n number of subtrees in a general tree
 * Root node is on level 0!
 *
 *
 * Applications of trees
 *    Storing naturally hierarchical data
 *    It is used to organize data for efficient insertion, deletion and searching
 *    - Binary tree has a logN time for searching an element.
 *    - Trie: It is a special kind of tree that is used to store the dictionary. It is a fast and efficient way for dynamic spell checking.
 *    - Heap: It is also a tree data structure implemented using arrays. It is used to implement priority queues.
 *    - B-Tree and B+Tree: B-Tree and B+Tree are the tree data structures used to implement indexing in databases.
 *    - Routing table: The tree data structure is also used to store the data in routing tables in the routers.
 */

/**
 * each node has 0..n child nodes
 */
class Tree {

}

/**
 * each node has maximally 2 child nodes
 */
class BinaryTree {

}

/**
 * A full binary tree (sometimes proper binary tree or 2-tree)
 * is a tree in which every node other than the leaves has two children
 */
class FullBinaryTree {

}

/**
 * A complete binary tree is a binary tree in which every level,
 * except possibly the last, is completely filled, and all nodes are as far left as possible
 */
class CompleteBinaryTree {

}

/**
 * Every node in the left subtree must contain a value less than the value
 * of the root node, and the value of each node in the right subtree must
 * be bigger than the value of the root node.
 */
class BinarySearchTree {

}

/**
 * AVL tree satisfies the property of the binary tree as well as of the binary search tree.
 * It is a self-balancing binary search tree that was invented by Adelson Velsky Lindas.
 * Here, self-balancing means that balancing the heights of left subtree and right subtree.
 * This balancing is measured in terms of the balancing factor.
 *
 * We can consider a tree as an AVL tree if the tree obeys the binary search tree
 * as well as a balancing factor. The balancing factor can be defined as the difference
 * between the height of the left subtree and the height of the right subtree.
 * The balancing factor's value must be either 0, -1, or 1; therefore, each node
 * in the AVL tree should have the value of the balancing factor either as 0, -1, or 1.
 */
class AVLTree {

}

/**
 * The red-Black tree is the binary search tree. The prerequisite of the Red-Black
 * tree is that we should know about the binary search tree. In a binary search tree,
 * the value of the left-subtree should be less than the value of that node, and the
 * value of the right-subtree should be greater than the value of that node.
 * As we know that the time complexity of binary search in the average case is log2n,
 * the best case is O(1), and the worst case is O(n).
 *
 * When any operation is performed on the tree, we want our tree to be balanced so
 * that all the operations like searching, insertion, deletion, etc., take less time,
 * and all these operations will have the time complexity of log2n.
 *
 * The red-black tree is a self-balancing binary search tree. AVL tree is also a height
 * balancing binary search tree then why do we require a Red-Black tree. In the AVL tree,
 * we do not know how many rotations would be required to balance the tree, but in the
 * Red-black tree, a maximum of 2 rotations are required to balance the tree.
 * It contains one extra bit that represents either the red or black color of a node
 * to ensure the balancing of the tree.
 */
class RedBlackTree {

}

/**
 * The splay tree data structure is also binary search tree in which recently accessed
 * element is placed at the root position of tree by performing some rotation operations.
 * Here, splaying means the recently accessed node. It is a self-balancing binary search
 * tree having no explicit balance condition like AVL tree
 */
class SplayTree {

}

/**
 * Treap data structure came from the Tree and Heap data structure.
 * So, it comprises the properties of both Tree and Heap data structures
 */
class Treap {

}

module.exports = {
    Tree,
    BinaryTree,
    FullBinaryTree,
    CompleteBinaryTree,
    BinarySearchTree,
    AVLTree,
    SplayTree,
    RedBlackTree,
    Treap,
};