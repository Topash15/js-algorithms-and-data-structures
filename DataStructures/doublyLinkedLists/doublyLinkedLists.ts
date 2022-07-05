/**
 * Identical to singly linked list but each node points to the previous node as well
 * Allows for more flexibility at the cost of memory consumption
 */

/**
 * Big O of Doubly Linked List
 * Insertion - O(1)
 * Removal - O(1)
 * Searching* - O(N)
 *      *Technically O(N/2) but simplifies to O(N)
 * Access - O(N)
 */

/**Stores single piece of data: value, next, and previous */
export class Node {
  value: any;
  next: Node | null;
  previous: Node | null;
  constructor(val: any) {
    this.value = val;
    this.next = null;
    this.previous = null;
  }
}

/**
 * List of data where each node points to the previous and next node in the list
 */
export class DoublyLinkedList {
  length: number;
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  /**Adds a node to the end of the list */
  push(val: any): DoublyLinkedList {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    newNode.previous = this.tail;
    this.tail!.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  /**
   * Removes last node in list.
   * Returns removed node
   * Returns undefined if list is empty
   */
  pop(): Node | undefined {
    if (this.length === 0) {
      return undefined;
    }
    const lastNode = this.tail;
    const newLast = lastNode!.previous;
    newLast!.next = null;
    this.tail = newLast;
    this.length--;
    return lastNode!;
  }

  /**
   * Removes node from beginning of list.
   * Returns node that was removed
   * or undefined if list is empty
   */
  shift(): Node | undefined {
    if (this.length === 0) {
      return undefined;
    }
    const currentNode = this.head;
    const nextNode = currentNode!.next;
    nextNode!.previous = null;
    this.head = nextNode;

    return currentNode!;
  }

  /**

   * Adds node to beginning of list
   */
  unshift(val: any): DoublyLinkedList {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    // first node in list before shift
    const prevFirstNode = this.head;
    prevFirstNode!.previous = newNode;
    newNode.next = prevFirstNode;
    this.head = newNode;
    this.length++;

    return this;
  }

  /**
   * Returns node based on index
   */
  get(index: number): Node | null {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentNode: Node | null = null;
    if (index > this.length / 2) {
      currentNode = this.tail;
      let prevNode = currentNode!.previous;
      let counter = this.length - 1;
      while (counter != index) {
        currentNode = prevNode;
        prevNode = currentNode!.previous;
        counter--;
      }
    }
    if (index <= this.length / 2) {
      currentNode = this.head;
      let nextNode = currentNode!.next;
      let counter = 0;
      while (counter != index) {
        currentNode = nextNode;
        nextNode = currentNode!.next;
        counter++;
      }
    }
    return currentNode;
  }

  /**
   * Sets value of node at specified index
   */
  set(val: any, index: number): boolean {
    let currentNode: Node | undefined | null = this.get(index);
    if (currentNode) {
      currentNode!.value = val;
      return true;
    }
    return false;
  }

  /**
   * Inserts node at specified index
   */
  insert(val: any, index: number): boolean {
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
    let prevNode: Node | null = this.get(index - 1);
    // node that will be to right of new node
    let nextNode: Node | null = prevNode!.next;
    // node being inserted
    let newNode: Node = new Node(val);
    prevNode!.next = newNode;
    if (nextNode) {
      nextNode.previous = newNode;
    }
    newNode.previous = prevNode!;
    newNode.next = newNode;
    this.length++;
    return true;
  }

  /**
   * Removes node at specified index.
   * Returns false if index is out of bounds else true
   */
  remove(index: number): boolean {
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
    let targetNode: Node | null = this.get(index);
    // node before removed node
    let prevNode: Node | null = targetNode!.next;
    // node after removed node
    let nextNode: Node | null = targetNode!.previous;

    prevNode!.next = nextNode;
    nextNode!.previous = prevNode;
    this.length--;

    return true;
  }
}
