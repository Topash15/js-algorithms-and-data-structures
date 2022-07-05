"use strict";
/**
 * Identical to singly linked list but each node points to the previous node as well
 * Allows for more flexibility at the cost of memory consumption
 */
exports.__esModule = true;
exports.DoublyLinkedList = exports.Node = void 0;
/**
 * Big O of Doubly Linked List
 * Insertion - O(1)
 * Removal - O(1)
 * Searching* - O(N)
 *      *Technically O(N/2) but simplifies to O(N)
 * Access - O(N)
 */
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
     * Removes node from beginning of list.
     * Returns node that was removed
     * or undefined if list is empty
     */
    DoublyLinkedList.prototype.shift = function () {
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
  
     * Adds node to beginning of list
     */
    DoublyLinkedList.prototype.unshift = function (val) {
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
     * Returns node based on index
     */
    DoublyLinkedList.prototype.get = function (index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        var currentNode = null;
        if (index > this.length / 2) {
            currentNode = this.tail;
            var prevNode = currentNode.previous;
            var counter = this.length - 1;
            while (counter != index) {
                currentNode = prevNode;
                prevNode = currentNode.previous;
                counter--;
            }
        }
        if (index <= this.length / 2) {
            currentNode = this.head;
            var nextNode = currentNode.next;
            var counter = 0;
            while (counter != index) {
                currentNode = nextNode;
                nextNode = currentNode.next;
                counter++;
            }
        }
        return currentNode;
    };
    /**
     * Sets value of node at specified index
     */
    DoublyLinkedList.prototype.set = function (val, index) {
        var currentNode = this.get(index);
        if (currentNode) {
            currentNode.value = val;
            return true;
        }
        return false;
    };
    /**
     * Inserts node at specified index
     */
    DoublyLinkedList.prototype.insert = function (val, index) {
        // edge cases
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            return !!this.unshift(val);
        }
        if (index === this.length) {
            return !!this.push(val);
        }
        // node that will be to left of new node
        var prevNode = this.get(index - 1);
        // node that will be to right of new node
        var nextNode = prevNode.next;
        // node being inserted
        var newNode = new Node(val);
        prevNode.next = newNode;
        if (nextNode) {
            nextNode.previous = newNode;
        }
        newNode.previous = prevNode;
        newNode.next = newNode;
        this.length++;
        return true;
    };
    /**
     * Removes node at specified index.
     * Returns false if index is out of bounds else true
     */
    DoublyLinkedList.prototype.remove = function (index) {
        if (index < 0 || index >= this.length) {
            return false;
        }
        if (index === 0) {
            return !!this.shift();
        }
        if (index === this.length - 1) {
            return !!this.pop();
        }
        // node being removed
        var targetNode = this.get(index);
        // node before removed node
        var prevNode = targetNode.next;
        // node after removed node
        var nextNode = targetNode.previous;
        prevNode.next = nextNode;
        nextNode.previous = prevNode;
        this.length--;
        return true;
    };
    return DoublyLinkedList;
}());
exports.DoublyLinkedList = DoublyLinkedList;
