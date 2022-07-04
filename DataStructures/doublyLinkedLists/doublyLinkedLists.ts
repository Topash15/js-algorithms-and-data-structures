/**
 * Identical to singly linked list but each node points to the previous node as well
 * Allows for more flexibility at the cost of memory consumption
 */

/**Stores single piece of data: val, and next */
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
