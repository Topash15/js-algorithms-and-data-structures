import { Node, Queue } from '../stacksAndQueues/queues'

describe('Queue', () => {
    it("creates an empty singly linked list", () => {
        const queue = new Queue();
        expect(queue.length).toEqual(0);
        expect(queue.first).toEqual(null);
        expect(queue.last).toEqual(null);
    })

    describe('Enqueue method', () => {
        it("adds a node to the end of the queue list", () => {
            const queue = new Queue();
            queue.enqueue(5);
            queue.enqueue(15);
            queue.enqueue(25);
            expect(queue.length).toEqual(3);
            expect(queue.first!.value).toEqual(5);
            expect(queue.last!.value).toEqual(25);
        })
    })

    describe("Dequeue method", () => {
        it("removes a node from the beginning of the queue list", () => {
            const queue = new Queue();
            queue.enqueue(5);
            queue.enqueue(15);
            queue.enqueue(25);
            expect(queue.dequeue()).toBe(true);
            expect(queue.first!.value).toBe(15);
            expect(queue.length).toBe(2);
        })
        it("returns false if list is empty", ()=>{
            const queue = new Queue();
            expect(queue.dequeue()).toBe(false);
        })
    })
})