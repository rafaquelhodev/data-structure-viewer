import { DataStructure } from "./dataStructure"


type node = Node | null;

class Node {

    value: number;
    next: node;

    constructor(value: number, next: node) {
        this.value = value;
        this.next = next;
    }
}

export class LinkedListDs implements DataStructure<number>{

    private head: node;
    private tail: node;
    private nElements: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.nElements = 0;
    }

    add(value: number): void {
        const newNode = new Node(value, null);

        if (this.nElements == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (!this.tail) {
                throw console.error();
            }

            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.nElements += 1;
    }

    addInPosition(value: number, pos: number) {

        if (pos > this.nElements) {
            throw new Error("The number of elements is less than the required position");
        }

        let currentNode = this.head as node | undefined;

        for (let index = 0; index < pos; index++) {
            currentNode = currentNode?.next;
        }

        if (currentNode == null) {
            throw new Error("The number of elements is less than the required position");
        }

        let nextNode = currentNode.next;

        let newNode = new Node(value, nextNode);

        currentNode.next = newNode;
    }

    remove(pos: number = this.nElements - 1): void {
        if (this.nElements == 0) {
            throw new Error("Error during deletion: the linked list is empty.");
        } else if (pos < 0 || pos >= this.nElements) {
            throw new Error("Error during deletion: invalid position");
        }

        this.nElements -= 1;

        let temp = this.head;
        if (pos == 0) {
            this.head = temp == null ? null : temp.next;
            if (this.nElements <= 1) {
                this.tail = this.head;
            }
            return;
        }

        let previous = null;

        let index = 0;

        while (temp != null && index != pos) {
            previous = temp;
            temp = temp.next;

            index += 1;
        }

        if (previous == null) {
            throw new Error("Error during deletion: the linked list is empty.");
        }

        previous.next = temp == null ? null : temp.next;

        if (pos == this.nElements) {
            this.tail = previous;
        }

    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    getNumberOfElements() {
        return this.nElements;
    }
}