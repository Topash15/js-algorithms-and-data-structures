/**
 * First in First Out data structure
 * Big O:
 * Insertion- O(1)
 * Removal- O(1)
 * Searching- O(N)
 * Access- O(N)
 */

/**
 * can use an array using only push and shift functions to add and remove;
 * not as efficient but very simple to set up
 * Has to re-index everytime something is removed
 */
const queue: any[] = [];
// add to queue with queue.push()
// remove from queue with queue.shift()

/**Stores single piece of data: value and next */
export class Node {
  value: any;
  next: Node | null;
  constructor(val: any) {
    this.value = val;
    this.next = null;
  }
}

/**
 * List that stores length, first, and last node
 */
export class Queue {
  length: number;
  first: Node | null;
  last: Node | null;
  constructor() {
    this.length = 0;
    this.first = null;
    this.last = null;
  }

  /**
   * Adds node to end of list
   */
  enqueue(val: any): Queue {
    const newNode: Node = new Node(val);
    if (this.length === 0) {
      this.last = newNode;
      this.first = newNode;
      this.length++;
      return this;
    }
    const lastNode: Node | null = this.last;
    lastNode!.next = newNode;
    this.last = newNode;
    this.length++;
    return this;
  }

  /**
   * Removes from beginning of list
   */
  dequeue(): boolean {
    if (this.length === 0) {
      return false;
    }

    const targetNode: Node | null = this.first;
    const newFirstNode: Node | null = targetNode!.next;
    this.first = newFirstNode;
    this.length--;

    return true;
  }
}
