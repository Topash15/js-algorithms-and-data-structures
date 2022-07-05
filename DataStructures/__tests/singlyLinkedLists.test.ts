import { Node, SinglyLinkedList } from "../singlyLinkedLists/singlyLinkedLists";

describe("Node", () => {
  it("should create a node with a value and next property", () => {
    const newNode = new Node(15);
    expect(newNode.value).toBe(15);
    expect(newNode.next).toBe(null);
  });
});

describe("SinglyLinkedList", () => {
  it("should create an empty list", () => {
    const list = new SinglyLinkedList();
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  describe("Push method", () => {
    it("should add a node to the end of the list", () => {
      const list = new SinglyLinkedList();
      list.push(15);
      expect(list.head!.value).toBe(15);
      expect(list.head!.next).toBe(null);
      list.push(34);
      expect(list.tail!.value).toBe(34);
      expect(list.head!.next!.value).toBe(34);
      expect(list.head!.next!.next).toBe(null);
      expect(list.length).toBe(2);
    });
  });

  describe("Pop method", () => {
    it("should remove a node from the end of the list and return the removed node", () => {
        const list = new SinglyLinkedList();
        list.push(15);
        list.push(34);
        expect(list.pop()).toEqual({value: 34, next: null});
        expect(list.tail!.value).toBe(15);
        expect(list.length).toBe(1);
    })
    it("returns undefined if the list is empty", () => {
      const list = new SinglyLinkedList();
      expect(list.pop()).toBe(undefined);
    })
  })

  describe("Shift method", () => {
    it("should remove the first node from the start of the list and return the node that was removed", () => {
      const list = new SinglyLinkedList();
      list.push(15);
      list.push(34);
      expect(list.shift()!.value).toBe(15);
      expect(list.head!.value).toBe(34);
      expect(list.head!.next).toBe(null);
      list.shift();
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.length).toBe(0);
    })
    it("returns undefined if the list is empty", () => {
      const list = new SinglyLinkedList();
      expect(list.shift()).toBe(undefined);
    })
  })

  describe("Unshift method", () => {
    it("should add a node to the beginning of the list and return the node that was create", () => {
      const list = new SinglyLinkedList();
      list.unshift(15);
      expect(list.head!.value).toBe(15);
      list.unshift(34);
      expect(list.head!.next && list.tail).toEqual({value: 15, next: null});
      expect(list.length).toBe(2)
    })
  })

  describe("Get method", () => {
    it("retrieves a node by it's position in the linked list. Returns node", () => {
      const list = new SinglyLinkedList();
      list.unshift(34);
      list.unshift(15);
      list.unshift(7);
      list.unshift(5);
      expect(list.get(1)!.value).toBe(7);
    })
    it("returns null if the index is less than 0 or equal to length of list", () => {
      const list = new SinglyLinkedList();
      list.unshift(34);
      list.unshift(15);
      list.unshift(7);
      list.unshift(5);
      expect(list.get(18)).toBe(null);
      expect(list.get(-1)).toBe(null);
    })
  })

  describe("Set method", () => {
    it("changes the value of a node based on its index and returns true", () => {
      let list = new SinglyLinkedList();
      list.push(15);
      list.push(18);
      list.push(45);
      list.push(46);
      list.push(820);
      expect(list.set(5, 3)).toBe(true);
      expect(list.get(3)!.value).toBe(5);
      expect(list.get(2)!.next!.value).toBe(5);
    })
    it("returns false if indexed node is not found", ()=>{
      let list = new SinglyLinkedList();
      list.push(15);
      list.push(18);
      list.push(45);
      list.push(46);
      list.push(820);
      expect(list.set(5, 7)).toBe(false);
    })
  })

  describe("Insert method", () => {
    it("inserts node at specified index", () => {
      let list = new SinglyLinkedList();
      list.push(15);
      list.push(18);
      list.push(45);
      list.push(46);
      list.push(820);
      expect(list.insert(5, 3)).toBe(true);
      expect(list.get(3)!.value).toBe(5);
      expect(list.get(2)!.next!.value).toBe(5);
      expect(list.get(4)!.value).toBe(46);
      expect(list.length).toBe(6)
    })
    it("returns false if indexed node is not found", ()=>{
      let list = new SinglyLinkedList();
      list.push(15);
      list.push(18);
      list.push(45);
      list.push(46);
      list.push(820);
      expect(list.set(5, 7)).toBe(false);
      expect(list.set(5, -7)).toBe(false);
    })
  })

  describe("Remove method", ()=>{
    it("returns true if node is found and removed", ()=>{
      let list = new SinglyLinkedList();
      list.push(15);
      list.push(16);
      list.push(17);
      list.push(18);
      expect(list.remove(2)).toBe(true);
      expect(list.length).toBe(3);
      expect(list.get(3)).toBe(null);
      expect(list.get(2)!.next).toBe(null);
    })
    it("returns false if index is less than 0 or greater than the list length", ()=>{
      let list = new SinglyLinkedList();
      list.push(15);
      list.push(16);
      list.push(17);
      list.push(18);
      expect(list.remove(-1)).toBe(false);
      expect(list.remove(533)).toBe(false);
    })
  })

  describe("Reverse method", ()=>{
    it("returns the list in reverse order", ()=>{
      let list = new SinglyLinkedList();
      list.push(15);
      list.push(16);
      list.push(17);
      list.push(18);
      list.reverse();
      expect(list.head!.value).toBe(18);
      expect(list.head!.next!.value).toBe(17);
      expect(list.tail!.value).toBe(15);
      expect(list.get(2)!.value).toBe(16)
    })
  })
});
