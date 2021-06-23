import { InputHTMLAttributes } from "react";
import { LinkedListDs } from "../dataStructures/linkedList";
import Node from "./Node";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    linkedList: LinkedListDs;
}

function renderLinkedList(props: InputProps) {
    let linkedListJsx: JSX.Element[] = [];

    let currentNode = props.linkedList.getHead();
    while (currentNode != null) {
        const el = <Node value={currentNode.value}></Node>;

        linkedListJsx.push(el);

        currentNode = currentNode.next;
    }

    return linkedListJsx;
}

const nodeListStyle = {
    display: 'flex'
}

const NodeList: React.FC<InputProps> = (props) => {
    return (
        <div style={nodeListStyle}>
            {renderLinkedList(props)}
        </div>
    );
};

export default NodeList;