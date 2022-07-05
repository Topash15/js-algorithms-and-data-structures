import { Node, Stack} from "../stacksAndQueues/stacks";

describe("Stack", () => {
    it("should create an empty stack", () => {
        const stack = new Stack();
        expect(stack.length).toBe(0);
        expect(stack.first).toBe(null);
        expect(stack.last).toBe(null);
    })

    describe("Push method", () => {
        it("adds a node to the beginning of the stack", () => {
            const stack = new Stack();
            stack.push("Process 1");
            expect(stack.first!.value).toBe("Process 1");
            expect(stack.last!.value).toBe("Process 1");
            expect(stack.length).toBe(1);
        })
    })

    describe("Pop method", () => {
        it("removes a node from the start of the stack", () => {
            const stack = new Stack();
            stack.push(5);
            stack.push(15);
            stack.push(25);
            expect(stack.pop()!.value).toBe(25);
            expect(stack.length).toBe(2);
            expect(stack.first!.value).toBe(15);
        })
    })
})