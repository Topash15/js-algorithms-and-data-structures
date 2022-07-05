import { Node, DoublyLinkedList } from "../doublyLinkedLists/doublyLinkedLists";

describe("Node", () => {
  it("should create a node with a value and next property", () => {
    const newNode = new Node(15);
    expect(newNode.value).toBe(15);
    expect(newNode.next).toBe(null);
    expect(newNode.previous).toBe(null);
  });
});

describe("DoublyLinkedList", () => {
  it("should create an empty doubly linked list", () => {
    const list = new DoublyLinkedList();
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  describe("push method", () => {
    it("should add a node to the end of the list and return true", () => {
      const list = new DoublyLinkedList();
      list.push(5);
      list.push(15);
      expect(list.length).toBe(2);
      expect(list.head!.value).toBe(5);
      expect(list.head!.next!.value).toBe(15);
      expect(list.tail!.value).toBe(15);
      expect(list.tail!.previous!.value).toBe(5);
    });
  });

  describe("pop method", () => {
    it("should remove a node from the end of the list and return the removed node", () => {
      const list = new DoublyLinkedList();
      list.push(5);
      list.push(15);
      list.push(25);
      expect(list.pop()!.value).toBe(25);
      expect(list.length).toBe(2);
      expect(list.tail!.value).toBe(15);
      expect(list.tail!.next).toBe(null);
    });
    it("should return undefined if list is empty", () => {
      const list = new DoublyLinkedList();
      expect(list.pop()).toBe(undefined);
    });
  });

  describe("Unshift method", () => {
    it("should add a node to the beginning of the list", () => {
      const list = new DoublyLinkedList();
      list.push(5);
      list.push(15);
      list.push(25);
      list.unshift(2);
      expect(list.head!.value).toBe(2);
      expect(list.head!.next!.value).toBe(5);
      expect(list.head!.next!.previous!.value).toBe(2);
    });
  });

  describe("Shift method", () => {
    it("should remove a node from the beginning of the list and return the node that was removed", () => {
      const list = new DoublyLinkedList();
      list.push(5);
      list.push(15);
      list.push(25);
      expect(list.shift()!.value).toBe(5);
      expect(list.head!.value).toBe(15);
      expect(list.head!.next!.value).toBe(25);
    });
    it("should return undefined if list is empty", () => {
      const list = new DoublyLinkedList();
      expect(list.shift()).toBe(undefined);
    });
  });

  describe("Get method", () => {
    it("should return the node at the specified index", () => {
      const list = new DoublyLinkedList();
      list.push(5);
      list.push(15);
      list.push(25);
      expect(list.get(2)!.value).toBe(25);
    });
    it("returns null if index is out of range", () => {
        const list = new DoublyLinkedList();
        expect(list.get(-1)).toBe(null);
        expect(list.get(1)).toBe(null);
    })
  });

  describe("Set method", () => {
    it("should return true after setting value of node at specified index", () => {
      const list = new DoublyLinkedList();
      list.push(5);
      list.push(15);
      list.push(25);
      expect(list.set(35, 2)).toBe(true);
      expect(list.tail!.value).toBe(35);
      expect(list.set(25, 1)).toBe(true);
      expect(list.head!.next!.value).toBe(25);
      expect(list.tail!.previous!.value).toBe(25);
    });
    it("returns false if node at specified index does not exist", () => {
      const list = new DoublyLinkedList();
      expect(list.set(5, 1)).toBe(false);
      list.push(5);
      list.push(15);
      list.push(25);
      expect(list.set(5, 15)).toBe(false);
      expect(list.set(5, -1)).toBe(false);
    });
  });

  describe("Insert method", () => {
    it("returns true if node was inserted at specified index", () => {
      const list = new DoublyLinkedList();
      list.push(5);
      list.push(25);
      expect(list.insert(15, 1)).toBe(true);
      expect(list.length).toBe(3);
      expect(list.get(1)!.value).toBe(15);
      expect(list.head!.next!.value).toBe(15);
      expect(list.tail!.previous!.value).toBe(15);
      expect(list.insert(35,3)).toBe(true);
      expect(list.tail!.value).toBe(35);
      expect(list.insert(0,0)).toBe(true);
      expect(list.head!.value).toBe(0);
    });
    it("returns false if node at specified index does not exist", () => {
      const list = new DoublyLinkedList();
      list.push(5);
      list.push(15);
      list.push(25);
      expect(list.insert(35, 5)).toBe(false);
      expect(list.insert(35, -5)).toBe(false);
    });
  });

  describe("Remove method", () => {
    it("removes node at specified index and returns true if successful", () => {
        const list = new DoublyLinkedList();
        list.push(5);
        list.push(15);
        list.push(25);
        expect(list.remove(2)).toBe(true);
        expect(list.length).toBe(2);
        expect(list.tail!.value).toBe(15);
    })
    it("returns false if node does not exist", () => {
        const list = new DoublyLinkedList();
        expect(list.remove(0)).toBe(false);
        list.push(5);
        list.push(15);
        list.push(25);
        expect(list.remove(-1)).toBe(false);
        expect(list.remove(10)).toBe(false);
    })
  })
});
