import { Node, BinarySearchTree} from "../binarySearchTrees/binarySearchTrees";

describe("Node", () => {
    it("creates a node with a value. Left and right should be null. Count starts at 1", () => {
        const newNode = new Node(15);
        expect(newNode.value).toBe(15);
        expect(newNode.left).toBe(null);
        expect(newNode.right).toBe(null);
        expect(newNode.count).toBe(1);
    })
})

describe("BinarySearchTree", () => {
    it("creates an empty binary search tree", () => {
        const list = new BinarySearchTree();
        expect(list.root).toBe(null);
    })

    describe("Insert method", () => {
        it("inserts a node to the correct position", () => {
            const list = new BinarySearchTree();
            list.insert(55);
            expect(list.root!.value).toBe(55);
            list.insert(25);
            expect(list.root!.left!.value).toBe(25);
            list.insert(75)
            expect(list.root!.right!.value).toBe(75);
            list.insert(5)
            expect(list.root!.left!.left!.value).toBe(5);
            list.insert(25);
            expect(list.root!.left!.count).toBe(2);
        })
    })

    describe("Find method", () => {
        it("finds a node with the given value", () => {
            const list = new BinarySearchTree();
            list.insert(55);
            list.insert(15);
            list.insert(25);
            list.insert(35);
            list.insert(105);
            list.insert(75);
            expect(list.find(25)!.value).toBe(25);
            expect(list.find(35)!.value).toBe(35);
        })
        it("returns null if node does not exist", () => {
            const list = new BinarySearchTree();
            list.insert(55);
            list.insert(15);
            list.insert(25);
            list.insert(35);
            list.insert(105);
            list.insert(75);
            expect(list.find(455)).toBe(null);
        })
    })
})