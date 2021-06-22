import React, { InputHTMLAttributes } from 'react';
import { LinkedListDs } from '../dataStructures/linkedList';

function renderLinkedList(props: InputProps) {
    let linkedListJsx: JSX.Element[] = [];

    let currentNode = props.linkedList.getHead();
    while (currentNode != null) {
        const el = (<div style={rectangle}>
            <div>value: {currentNode.value}</div>
        </div>);

        linkedListJsx.push(el);

        currentNode = currentNode.next;
    }

    return linkedListJsx;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    linkedList: LinkedListDs;
}

const rectangle = {
    "width": '100px',
    "height": '150px',
    "background": 'green',
    "margin": "100px",
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "flex-end",
    "align-items": "center"
}

const nodeListStyle = {
    display: 'flex'
}

const Node: React.FC<InputProps> = (props) => {
    return (
        <div style={nodeListStyle}>
            {renderLinkedList(props)}
        </div>
    );
};

export default Node;