import { LinkedListDs } from "../dataStructures/linkedList";
import Node from "./Node";

interface InputProps2 {
    linkedList: LinkedListDs;
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    handleChange: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    addedValue: number;
}

function renderLinkedList(props: InputProps2) {
    let linkedListJsx: JSX.Element[] = [];

    let currentNode = props.linkedList.getHead();
    while (currentNode != null) {
        const el = <Node value={currentNode.value} onClick={props.onClick} addedValue={props.addedValue} handleChange={props.handleChange}></Node>;

        linkedListJsx.push(el);

        currentNode = currentNode.next;
    }

    return linkedListJsx;
}

const nodeListStyle = {
    display: 'flex'
}

const NodeList: React.FC<InputProps2> = (props) => {
    return (
        <div style={nodeListStyle}>
            {renderLinkedList(props)}
        </div>
    );
};

export default NodeList;