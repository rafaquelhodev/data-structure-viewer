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

    getHead() {
        return this.head;
    }
}