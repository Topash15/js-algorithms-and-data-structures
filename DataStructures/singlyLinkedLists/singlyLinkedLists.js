"use strict";
/**
 * What is a linked list?
 * data structure that contains a head, tail and length property
 * Does not have an index. Each node only points to next node
 * Random access is not allowed. Must go through list one-by-one
 * Easy to add/remove nodes as the list does not need to be re-indexed (because it's not indexed)
 *
 *
 * Very useful alternative to arrays when insertion/deletion from the beginning is frequently required
 *
 */
exports.__esModule = true;
exports.SinglyLinkedList = exports.Node = void 0;
/**Stores single piece of data: val, and next */
var Node = /** @class */ (function () {
    function Node(val) {
        this.value = val;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    /** adds new node to end of list */
    SinglyLinkedList.prototype.push = function (val) {
        var newNode = new Node(val);
        // if the list is empty, make new node the head and tail
        // add one to length
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            var oldTail = this.tail;
            oldTail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    };
    /** Removes node from end of list.
     * Returns undefined if list is empty.
     * Returns node that was removed.
     */
    SinglyLinkedList.prototype.pop = function () {
        if (this.length === 0) {
            return undefined;
        }
        // locates last node and second to last node
        // second to last node will become new tail
        var current = this.head;
        var previous;
        while (current.next) {
            previous = current;
            current = previous.next;
        }
        previous.next = null;
        this.tail = previous;
        this.length--;
        // if the new list has a length of 0,
        //  the head and tail must be null
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    };
    /**
     * Removes a new node from the beginner of the list
     * Returns node that was removed
     * Returns undefined if the list is empty
     */
    SinglyLinkedList.prototype.shift = function () {
        if (this.length === 0) {
            return undefined;
        }
        // save the first and second node
        var current = this.head;
        var newHead = current.next;
        // sets the new first head
        this.head = newHead;
        this.length--;
        // if the removed node was also the tail, set the tail to null
        if (!newHead) {
            this.tail = null;
        }
        return current;
    };
    /**
     * Adds node to beginning of list
     * Returns list
     */
    SinglyLinkedList.prototype.unshift = function (val) {
        var newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }
        var current = this.head;
        newNode.next = current;
        this.head = newNode;
        this.length++;
        return this;
    };
    /**
     * Retrieves node index
     * Returns null if index is less than zero or equal to length of list
     */
    SinglyLinkedList.prototype.get = function (index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        var current = this.head;
        var counter = 0;
        while (counter !== index) {
            counter++;
            current = current.next;
        }
        return current;
    };
    /**
     * Changes the value of a node based on it's position in the linked list
     */
    SinglyLinkedList.prototype.set = function (val, index) {
        var targetNode = this.get(index);
        if (targetNode) {
            targetNode.value = val;
            return true;
        }
        return false;
    };
    /**
     * Adds a node to the list at a specific position
     */
    SinglyLinkedList.prototype.insert = function (val, index) {
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
        // main process
        var newNode = new Node(val);
        var prevNode = this.get(index - 1);
        var targetNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = targetNode;
        this.length++;
        return true;
    };
    /**
     * Removes a node from the list at a given index
     */
    SinglyLinkedList.prototype.remove = function (index) {
        // edge cases
        if (index < 0 || index >= this.length) {
            return false;
        }
        if (index === 0) {
            return !!this.shift();
        }
        if (index === this.length - 1) {
            return !!this.pop();
        }
        var prevNode = this.get(index - 1);
        var targetNode = prevNode.next;
        prevNode.next = targetNode.next;
        this.length--;
        return true;
    };
    /**
     * Reverses order of list
     */
    SinglyLinkedList.prototype.reverse = function () {
        var currentNode = this.head;
        var nextNode = currentNode.next;
        var temp = nextNode.next;
        this.tail = currentNode;
        var count = 0;
        while (count < this.length - 1) {
            nextNode.next = currentNode;
            currentNode = nextNode;
            nextNode = temp;
            if (nextNode) {
                temp = nextNode.next;
            }
            count++;
        }
        this.head = currentNode;
        return this;
    };
    return SinglyLinkedList;
}());
exports.SinglyLinkedList = SinglyLinkedList;
