import { NodeListProperties } from "../types/NodeProperties";
import Node from "./Node";
import "./NullNode.scss";


function renderLinkedList(props: NodeListProperties) {
    let linkedListJsx: JSX.Element[] = [];

    let currentNode = props.linkedList.getHead();

    let nodeId = 0;

    while (currentNode != null) {
        const el = <Node key={nodeId + 1}
            value={currentNode.value}
            onClick={props.onClick}
            addedValue={props.addedValue}
            handleChange={props.handleChange}
            id={nodeId}
            addedPosition={nodeId + 1}
            handleRemove={props.handleRemove}></Node>;

        linkedListJsx.push(el);

        console.log(linkedListJsx)

        currentNode = currentNode.next;

        nodeId += 1;
    }

    if (linkedListJsx.length >= 1) {
        linkedListJsx.push(<div key={nodeId + 1} className="nullNode">NULL</div>)
    }

    return linkedListJsx;
}

const nodeListStyle = {
    display: 'flex'
}

const NodeList: React.FC<NodeListProperties> = (props) => {
    return (
        <div style={nodeListStyle}>
            {renderLinkedList(props)}
        </div>
    );
};

export default NodeList;