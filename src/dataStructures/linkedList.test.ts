import { LinkedListDs } from "./linkedList";

jest.spyOn(window, 'alert').mockImplementation(() => { });

describe("remove", () => {
    it("should delete last node when no position is given", () => {
        const linkedList = new LinkedListDs();
        linkedList.add(-1);
        linkedList.add(-2);
        linkedList.add(-3);

        linkedList.remove();

        expect(linkedList.getNumberOfElements()).toBe(2);
        expect(linkedList.getTail()?.value).toBe(-2);
    });

    it("should delete node connecting previous and next node", () => {
        const linkedList = new LinkedListDs();
        linkedList.add(-1);
        linkedList.add(-2);
        linkedList.add(-3);

        linkedList.remove(1);

        expect(linkedList.getNumberOfElements()).toBe(2);

        const head = linkedList.getHead();
        expect(head?.value).toBe(-1);
        expect(head?.next?.value).toBe(-3);
    });

    it("should delete node connecting previous and next node for bigger list", () => {
        const linkedList = new LinkedListDs();
        linkedList.add(-1);
        linkedList.add(-2);
        linkedList.add(-3);
        linkedList.add(-4);
        linkedList.add(-5);
        linkedList.add(-6);

        linkedList.remove(3);

        expect(linkedList.getNumberOfElements()).toBe(5);

        const head = linkedList.getHead();
        expect(head?.value).toBe(-1);
        let next = head?.next;
        expect(next?.value).toBe(-2);
        next = next?.next;
        expect(next?.value).toBe(-3);
        next = next?.next;
        expect(next?.value).toBe(-5);
    });

    it("should set head to null when list becomes empty", () => {
        const linkedList = new LinkedListDs();
        linkedList.add(-1);
        linkedList.add(-2);
        linkedList.add(-3);

        linkedList.remove();
        linkedList.remove();
        linkedList.remove();

        expect(linkedList.getNumberOfElements()).toBe(0);

        const head = linkedList.getHead();
        const tail = linkedList.getTail();
        expect(head).toBeNull();
        expect(tail).toBeNull();
    });

    it("should update head when index 0 is provided", () => {
        const linkedList = new LinkedListDs();
        linkedList.add(-1);
        linkedList.add(-2);
        linkedList.add(-3);

        linkedList.remove(0);

        expect(linkedList.getNumberOfElements()).toBe(2);
        expect(linkedList.getHead()?.value).toBe(-2);
    });

    it("should throw error when position is negative", () => {
        const linkedList = new LinkedListDs();
        linkedList.add(-1);
        linkedList.add(-2);
        linkedList.add(-3);

        linkedList.remove(-1);
        expect(window.alert).toBeCalledWith(new Error("Error during deletion: invalid position"));
    });

    it("should throw error when position is greater than the number of elements", () => {
        const linkedList = new LinkedListDs();
        linkedList.add(-1);
        linkedList.add(-2);
        linkedList.add(-3);

        linkedList.remove(3);
        expect(window.alert).toBeCalledWith(new Error("Error during deletion: invalid position"));
    });

    it("should throw error when the number of elements is zero", () => {
        const linkedList = new LinkedListDs();
        linkedList.add(-1);
        linkedList.add(-2);
        linkedList.add(-3);

        linkedList.remove();
        linkedList.remove();
        linkedList.remove();

        linkedList.remove(3);
        expect(window.alert).toBeCalledWith(new Error("Error during deletion: the linked list is empty."));
    });
});

describe("add position", () => {
    it("should add at last position and update head and tail when no value is given", () => {
        const linkedList = new LinkedListDs();

        linkedList.addInPosition(10);

        expect(linkedList.getNumberOfElements()).toBe(1);
        expect(linkedList.getHead()?.value).toBe(10);
        expect(linkedList.getTail()?.value).toBe(10);
    });

    it("should add at last position and update tail when no value is given", () => {
        const linkedList = new LinkedListDs();
        linkedList.add(-1);
        linkedList.add(-2);

        linkedList.addInPosition(10);

        expect(linkedList.getNumberOfElements()).toBe(3);
        expect(linkedList.getHead()?.value).toBe(-1);
        expect(linkedList.getTail()?.value).toBe(10);
    });

    it("should add at last position and update tail when no value is given with one element", () => {
        const linkedList = new LinkedListDs();
        linkedList.add(-1);

        linkedList.addInPosition(10);

        expect(linkedList.getNumberOfElements()).toBe(2);
        expect(linkedList.getHead()?.value).toBe(-1);
        expect(linkedList.getHead()?.next?.value).toBe(10);
    });

    it("should add at position 0 and change head and tail nodes", () => {
        const linkedList = new LinkedListDs();

        linkedList.addInPosition(10, 0);

        expect(linkedList.getNumberOfElements()).toBe(1);
        expect(linkedList.getHead()?.value).toBe(10);
        expect(linkedList.getTail()?.value).toBe(10);
    });

    it("should add at position 0 and change head node", () => {
        const linkedList = new LinkedListDs();
        linkedList.add(-1);
        linkedList.add(-2);

        linkedList.addInPosition(10, 0);

        expect(linkedList.getNumberOfElements()).toBe(3);
        expect(linkedList.getHead()?.value).toBe(10);
    });

    it("should add at position 0 and change head node", () => {
        const linkedList = new LinkedListDs();
        linkedList.add(-1);
        linkedList.add(-2);
        linkedList.add(-3);

        linkedList.addInPosition(10, 0);

        expect(linkedList.getNumberOfElements()).toBe(4);
        expect(linkedList.getHead()?.value).toBe(10);
    });

    it("should add at last position and change tail node", () => {
        const linkedList = new LinkedListDs();
        linkedList.add(-1);
        linkedList.add(-2);
        linkedList.add(-3);

        linkedList.addInPosition(10, 3);

        expect(linkedList.getNumberOfElements()).toBe(4);
        expect(linkedList.getTail()?.value).toBe(10);
    });

    it("should add at node between two nodes", () => {
        const linkedList = new LinkedListDs();
        linkedList.add(-1);
        linkedList.add(-2);
        linkedList.add(-3);

        linkedList.addInPosition(10, 1);

        expect(linkedList.getNumberOfElements()).toBe(4);
        expect(linkedList.getHead()?.next?.value).toBe(10);
    });

    it("should return error when the required position is greater than the number of elements", () => {
        const linkedList = new LinkedListDs();
        linkedList.add(-1);
        linkedList.add(-2);
        linkedList.add(-3);

        linkedList.addInPosition(10, 4);
        expect(window.alert).toBeCalledWith(new Error("The number of elements is less than the required position"));
    });

    it("should return error when the required position is invalid", () => {
        const linkedList = new LinkedListDs();
        linkedList.add(-1);
        linkedList.add(-2);
        linkedList.add(-3);

        linkedList.addInPosition(10, -1);
        expect(window.alert).toBeCalledWith(new Error("Error during addition: invalid position"));
    });
});