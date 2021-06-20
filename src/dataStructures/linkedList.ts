import { DataStructure } from "./dataStructure"


type node = Node | null;

class Node{

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

    getHead() {
        return this.head;
    }
}