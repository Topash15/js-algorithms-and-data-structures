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

/**Stores single piece of data: val, and next */
export class Node {
  value: any;
  next: Node | null;
  constructor(val: any) {
    this.value = val;
    this.next = null;
  }
}

export class SinglyLinkedList {
  length: number;
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  /** adds new node to end of list */
  push(val: any) {
    const newNode = new Node(val);
    // if the list is empty, make new node the head and tail
    // add one to length
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldTail = this.tail;
      oldTail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /** Removes node from end of list.
   * Returns undefined if list is empty.
   * Returns node that was removed.
   */
  pop() {
    if (this.length === 0) {
      return undefined;
    }

    // locates last node and second to last node
    // second to last node will become new tail
    let current: Node | null = this.head;
    let previous: Node | null;
    while (current!.next) {
      previous = current;
      current = previous!.next;
    }

    previous!.next = null;
    this.tail = previous!;
    this.length--;

    // if the new list has a length of 0,
    //  the head and tail must be null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  /**
   * Removes a new node from the beginner of the list
   * Returns node that was removed
   * Returns undefined if the list is empty
   */
  shift() {
    if (this.length === 0) {
      return undefined;
    }

    // save the first and second node
    let current: Node | null = this.head;
    let newHead: Node | null = current!.next;

    // sets the new first head
    this.head = newHead;
    this.length--;

    // if the removed node was also the tail, set the tail to null
    if (!newHead) {
      this.tail = null;
    }

    return current;
  }

  /**
   * Adds node to beginning of list
   * Returns list
   */
  unshift(val: any) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    let current: Node | null = this.head;
    newNode.next = current;
    this.head = newNode;
    this.length++;
    return this;
  }

  /**
   * Retrieves node index
   * Returns null if index is less than zero or equal to length of list
   */
  get(index: number): Node | null {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let current: Node | null = this.head;
    let counter: number = 0;

    while (counter !== index) {
      counter++;
      current = current!.next;
    }
    return current;
  }

  /**
   * Changes the value of a node based on it's position in the linked list
   */
  set(val: any, index: number): boolean {
    let targetNode : Node | null = this.get(index);
    if (targetNode) {
      targetNode.value = val;
      return true;
    }
    return false;
  }

  /**
   * Adds a node to the list at a specific position
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

    // main process
    let newNode: Node = new Node(val);
    let prevNode: Node | null = this.get(index - 1);
    let nextNode: Node | null = prevNode!.next;

    prevNode!.next = newNode;
    newNode.next = nextNode;
    this.length++;

    return true;
  }

  /**
   * Removes a node from the list at a given index
   */
  remove(index: number): boolean {
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

    const prevNode: Node | null = this.get(index - 1);
    const targetNode: Node | null = prevNode!.next;
    prevNode!.next = targetNode!.next;
    this.length--;

    return true;
  }

  /**
   * Reverses order of list
   */
  reverse(): SinglyLinkedList {
    let currentNode: Node | null = this.head;
    let nextNode: Node | null = currentNode!.next;
    let temp: Node | null = nextNode!.next;
    this.tail = currentNode;


    let count: number = 0;
    while(count < this.length-1) {
      nextNode!.next = currentNode;
      currentNode = nextNode;
      nextNode = temp;
      if(nextNode){
        temp = nextNode.next
      }
      count++;
    }
    this.head = currentNode;

    return this;
  }
}
