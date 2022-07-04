"use strict";
/**
 * Identical to singly linked list but each node points to the previous node as well
 * Allows for more flexibility at the cost of memory consumption
 */
exports.__esModule = true;
exports.Node = void 0;
/**Stores single piece of data: val, and next */
var Node = /** @class */ (function () {
    function Node(val) {
        this.value = val;
        this.next = null;
        this.previous = null;
    }
    return Node;
}());
exports.Node = Node;
