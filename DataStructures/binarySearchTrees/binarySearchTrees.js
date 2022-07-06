"use strict";
/**
 * Data structure that consists of nodes in a parent/child relationship
 * Trees are non-linear (many paths that can be taken)
 *
 * Root-top node of tree
 * Child-node directly connected to another node moving away from root
 * Parent- converse of child
 * Sibling - node of same parent
 * Leaf- Node with no children
 * Edge - connection between nodes
 *
 * Examples of trees:
 *  - HTML DOM
 *  - Network Routing
 *  - Abstract Syntax Tree
 *  - AI
 *  - Folders in operating system
 *  - JSON
 *
 * Types of Trees
 *  - Binary
 *      - Each node can have at most two children
 *  - Binary Search Trees
 *      - Special case of binary tree
 *      - Sorted in particular way
 *      - Used to store data that can be compared to each other
 *      - Every node to left of parent is less and every node to right is greater
 *
 *  Big O of Binary Search Tree
 *      Insertion - O(log n)*
 *      Searching - O(log n)*
 *          *Best and average case
 *      Worst Case
 *      Insertion - O(n)
 *      Searching - O(n)
 */
exports.__esModule = true;
exports.BinarySearchTree = exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(val) {
        this.value = val;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
    return Node;
}());
exports.Node = Node;
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    /** Adds node to tree
     */
    BinarySearchTree.prototype.insert = function (val) {
        if (this.root === null) {
            this.root = new Node(val);
            return this;
        }
        var currentNode = this.root;
        while (true) {
            //increase frequency count if equal to node value
            if (val === currentNode.value) {
                currentNode.count++;
                return this;
            }
            //checking left side of tree
            if (val <= currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = new Node(val);
                    return this;
                }
                currentNode = currentNode.left;
            }
            //checking right side of tree
            if (val > currentNode.value) {
                if (!currentNode.right) {
                    currentNode.right = new Node(val);
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    };
    /**
     * Searchs tree for node with given value
     * Returns null if node is not found
     */
    BinarySearchTree.prototype.find = function (val) {
        // edge case
        if (!this.root) {
            return null;
        }
        var currentNode = this.root;
        while (currentNode && val !== currentNode.value) {
            if (val < currentNode.value) {
                currentNode = currentNode.left;
            }
            if (val > currentNode.value) {
                currentNode = currentNode.right;
            }
        }
        return currentNode;
    };
    return BinarySearchTree;
}());
exports.BinarySearchTree = BinarySearchTree;
