"use strict";
/**
 * Identical to singly linked list but each node points to the previous node as well
 * Allows for more flexibility at the cost of memory consumption
 */
exports.__esModule = true;
exports.DoublyLinkedList = exports.Node = void 0;
/**Stores single piece of data: value, next, and previous */
var Node = /** @class */ (function () {
    function Node(val) {
        this.value = val;
        this.next = null;
        this.previous = null;
    }
    return Node;
}());
exports.Node = Node;
/**
 * List of data where each node points to the previous and next node in the list
 */
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    /**Adds a node to the end of the list */
    DoublyLinkedList.prototype.push = function (val) {
        var newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    };
    /**
     * Removes last node in list.
     * Returns removed node
     * Returns undefined if list is empty
     */
    DoublyLinkedList.prototype.pop = function () {
        if (this.length === 0) {
            return undefined;
        }
        var lastNode = this.tail;
        var newLast = lastNode.previous;
        newLast.next = null;
        this.tail = newLast;
        this.length--;
        return lastNode;
    };
    /**
     * Adds node to beginning of list
     */
    DoublyLinkedList.prototype.shift = function (val) {
        var newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }
        // first node in list before shift
        var prevFirstNode = this.head;
        prevFirstNode.previous = newNode;
        newNode.next = prevFirstNode;
        this.head = newNode;
        this.length++;
        return this;
    };
    /**
     * Removes node from beginning of list.
     * Returns node that was removed
     * or undefined if list is empty
     */
    DoublyLinkedList.prototype.unshift = function () {
        if (this.length === 0) {
            return undefined;
        }
        var currentNode = this.head;
        var nextNode = currentNode.next;
        nextNode.previous = null;
        this.head = nextNode;
        return currentNode;
    };
    /**
     * Returns node based on index
     */
    DoublyLinkedList.prototype.get = function (index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index > this.length / 2) {
            var currentNode = this.tail;
        }
        if (index <= this.length / 2) {
            var currentNode = this.head;
        }
    };
    return DoublyLinkedList;
}());
exports.DoublyLinkedList = DoublyLinkedList;
