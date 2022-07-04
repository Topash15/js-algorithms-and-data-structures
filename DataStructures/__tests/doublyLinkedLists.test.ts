import { Node } from "../doublyLinkedLists/doublyLinkedLists";

describe("Node", () => {
  it("should create a node with a value and next property", () => {
    const newNode = new Node(15);
    expect(newNode.value).toBe(15);
    expect(newNode.next).toBe(null);
    expect(newNode.previous).toBe(null);
  });
});
