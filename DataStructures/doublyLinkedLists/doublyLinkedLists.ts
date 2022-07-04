/**
 * Identical to singly linked list but each node points to the previous node as well
 * Allows for more flexibility at the cost of memory consumption
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
   * Adds node to beginning of list
   */
  shift(val: any): DoublyLinkedList {
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
   * Removes node from beginning of list.
   * Returns node that was removed
   * or undefined if list is empty
   */
  unshift(): Node | undefined {
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
   * Returns node based on index
   */
  get(index: number): Node | undefined {
    if(index < 0 || index >= this.length) {
        return undefined;
    }
    if(index > this.length/2){
        const currentNode = this.tail;
        
    }
    if(index <= this.length/2){
        const currentNode = this.head;
    }
  }
}
