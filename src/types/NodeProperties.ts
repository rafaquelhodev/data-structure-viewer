import { LinkedListDs } from "../dataStructures/linkedList";


interface NodeProperties extends NodeActionProperties, NodeForm {
    id: number;
    value: number;
    addedPosition: number;
}

interface NodeListProperties extends NodeActionProperties, NodeForm {
    linkedList: LinkedListDs;
}

interface NodeActionProperties {
    onClick: (arg: number) => void;
    handleRemove: (arg: number) => void;
    handleChange: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

interface NodeForm {
    addedValue: number;
}

export type { NodeProperties, NodeListProperties };