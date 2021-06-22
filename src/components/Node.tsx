import React, { InputHTMLAttributes } from 'react';
import { LinkedListDs } from '../dataStructures/linkedList';

function renderLinkedList(props: InputProps) {
    let linkedListJsx: JSX.Element[] = [];

    let currentNode = props.linkedList.getHead();
    while (currentNode != null) {
        const el = (<div style={rectangle}>
            <span>value: {currentNode.value}</span>
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
    width: '50px',
    height: '50px',
    background: 'green'
}

const Node: React.FC<InputProps> = (props) => {
    return (
        <div>
            {renderLinkedList(props)}
        </div>
    );
};

export default Node;