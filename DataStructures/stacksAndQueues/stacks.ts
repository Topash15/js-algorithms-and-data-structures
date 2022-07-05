/**
 * Stack
 * Abstract datastructure
 * Follows LIFO (Last In, First Out)
 * Last element to be added to stack will be the first element removed
 */

/**
 * can use an array using only push and pop functions to add and remove;
 * not as efficient but very simple to set up
 */
const stack: any[] = [];
// add to stack with stack.push()
// remove from stack with stack.pop()

/**
 * more effecient to use singly linked list to create stack
 */

/**Stores single piece of data: value and next */
export class Node {
  value: any;
  next: Node | null;
  constructor(val: any) {
    this.value = val;
    this.next = null;
  }
}

export class Stack {
  length: number;
  first: Node | null;
  last: Node | null;
  constructor() {
    this.length = 0;
    this.first = null;
    this.last = null;
  }

  /**
   * Removes a new node from the beginner of the list
   * Returns node that was removed
   * Returns undefined if the list is empty
   */
  pop(): Node | null {
    if (this.length === 0) {
      return null;
    }

    // save the first and second node
    let current: Node | null = this.first;
    let newfirst: Node | null = current!.next;

    // sets the new first first
    this.first = newfirst;
    this.length--;

    // if the removed node was also the last, set the last to null
    if (!newfirst) {
      this.last = null;
    }

    return current;
  }

  /**
   * Adds node to beginning of list
   * Returns list
   */
  push(val: any) : Stack {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
      return this;
    }

    let current: Node | null = this.first;
    newNode.next = current;
    this.first = newNode;
    this.length++;
    return this;
  }
}
