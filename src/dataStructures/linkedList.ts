import { DataStructure } from "./dataStructure"
import Logger from "./logging/logger";


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
    private logger: Logger;

    constructor() {
        this.head = null;
        this.tail = null;
        this.nElements = 0;
        this.logger = new Logger();
    }

    addInPosition(value: number, pos: number = this.nElements) {
        try {
            this.logger.newLoggerBlock("Adding node");
            this._addInPosition(value, pos);
            this.logger.endLogBlock();
        } catch (ex) {
            alert(ex);
        }
    }

    remove(pos: number = this.nElements - 1) {
        try {
            this.logger.newLoggerBlock("Removing node");
            this._remove(pos);
            this.logger.endLogBlock();
        } catch (ex) {
            alert(ex);
        }
    }

    add(value: number): void {
        this.logger.newLoggerBlock("Adding tail node");
        this.logger.addLogBlock(`Pointing to node to tail`);

        const newNode = new Node(value, null);

        if (this.nElements === 0) {
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

        this.logger.endLogBlock();
    }

    private _addInPosition(value: number, pos: number = this.nElements) {
        if (pos > this.nElements) {
            throw new Error("The number of elements is less than the required position");
        } else if (pos < 0) {
            throw new Error("Error during addition: invalid position");
        }

        let prevNode = this.head;
        let nextNode = prevNode !== null ? prevNode.next : null;

        if (pos == 0) {
            this.head = new Node(value, nextNode);
            this.logger.addLogBlock(`Pointing to node at i = ${pos}`);
        }

        if (pos == this.nElements) {
            this.tail = new Node(value, null);
        }

        this.nElements += 1;

        if (this.nElements == 1) {
            return;
        }

        let index = 0;
        while (nextNode !== null && index !== pos - 1) {
            prevNode = nextNode;
            nextNode = nextNode.next;
            index += 1;
            this.logger.addLogBlock(`Pointing to node at i = ${index}`);
        }

        let newNode = new Node(value, nextNode);

        if (prevNode == null) {
            throw new Error("Error during addition: a null node was found");
        }

        prevNode.next = newNode;
    }

    private _remove(pos: number = this.nElements - 1): void {
        if (this.nElements == 0) {
            throw new Error("Error during deletion: the linked list is empty.");
        } else if (pos < 0 || pos >= this.nElements) {
            throw new Error("Error during deletion: invalid position");
        }

        this.nElements -= 1;

        let temp = this.head;
        if (pos == 0) {
            this.logger.addLogBlock(`Pointing to node at i = ${pos}`);

            this.head = temp == null ? null : temp.next;
            if (this.nElements <= 1) {
                this.tail = this.head;
            }
            return;
        }

        let previous = null;

        let index = 0;

        while (temp !== null && index !== pos) {
            previous = temp;
            temp = temp.next;

            index += 1;

            this.logger.addLogBlock(`Pointing to node at i = ${index}`);
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

    getLogs() {
        return this.logger.getLog();
    }

    print() {
        let print = "";
        let node = this.getHead();
        while (node) {
            print += node.value + ", ";
            node = node.next;
        }
        console.log(print);
    }
}