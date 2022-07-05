"use strict";
/**
 * First in First Out data structure
 */
exports.__esModule = true;
exports.Queue = exports.Node = void 0;
/**
 * can use an array using only push and shift functions to add and remove;
 * not as efficient but very simple to set up
 * Has to re-index everytime something is removed
 */
var queue = [];
// add to queue with queue.push()
// remove from queue with queue.shift()
/**Stores single piece of data: value and next */
var Node = /** @class */ (function () {
    function Node(val) {
        this.value = val;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
/**
 * List that stores length, first, and last node
 */
var Queue = /** @class */ (function () {
    function Queue() {
        this.length = 0;
        this.first = null;
        this.last = null;
    }
    /**
     * Adds node to end of list
     */
    Queue.prototype.enqueue = function (val) {
        var newNode = new Node(val);
        if (this.length === 0) {
            this.last = newNode;
            this.first = newNode;
            this.length++;
            return this;
        }
        var lastNode = this.last;
        lastNode.next = newNode;
        this.last = newNode;
        this.length++;
        return this;
    };
    /**
     * Removes from beginning of list
     */
    Queue.prototype.dequeue = function () {
        if (this.length === 0) {
            return false;
        }
        var targetNode = this.first;
        var newFirstNode = targetNode.next;
        this.first = newFirstNode;
        this.length--;
        return true;
    };
    return Queue;
}());
exports.Queue = Queue;
