"use strict";
/**
 * Stack
 * Abstract datastructure
 * Follows LIFO (Last In, First Out)
 * Last element to be added to stack will be the first element removed
 */
exports.__esModule = true;
exports.Stack = exports.Node = void 0;
/**
 * can use an array using only push and pop functions to add and remove;
 * not as efficient but very simple to set up
 */
var stack = [];
// add to stack with stack.push()
// remove from stack with stack.pop()
/**
 * more effecient to use singly linked list to create stack
 */
/**Stores single piece of data: value and next */
var Node = /** @class */ (function () {
    function Node(val) {
        this.value = val;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
var Stack = /** @class */ (function () {
    function Stack() {
        this.length = 0;
        this.first = null;
        this.last = null;
    }
    /**
     * Removes a new node from the beginner of the list
     * Returns node that was removed
     * Returns undefined if the list is empty
     */
    Stack.prototype.pop = function () {
        if (this.length === 0) {
            return null;
        }
        // save the first and second node
        var current = this.first;
        var newfirst = current.next;
        // sets the new first first
        this.first = newfirst;
        this.length--;
        // if the removed node was also the last, set the last to null
        if (!newfirst) {
            this.last = null;
        }
        return current;
    };
    /**
     * Adds node to beginning of list
     * Returns list
     */
    Stack.prototype.push = function (val) {
        var newNode = new Node(val);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
            this.length++;
            return this;
        }
        var current = this.first;
        newNode.next = current;
        this.first = newNode;
        this.length++;
        return this;
    };
    return Stack;
}());
exports.Stack = Stack;
