import Console from "../components/Console";
import { Component } from "react"
import Form from "./Form";
import NodeList from "../components/NodeList";
import { LinkedListDs } from "../dataStructures/linkedList";
import Box from "./Box";

export default class LinkedList extends Component<{}, { linkedList: LinkedListDs, addedValue: number }>{

    private linkedList: LinkedListDs;

    constructor(props: any) {
        super(props)

        this.linkedList = new LinkedListDs();

        this.state = { linkedList: this.linkedList, addedValue: 1 }

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addPosition = this.addPosition.bind(this);
        this.handleAddPosition = this.handleAddPosition.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    addPosition(arg: number, pos: number): void {
        this.linkedList.addInPosition(arg, pos);
    }

    handleAdd() {
        this.linkedList.addInPosition(this.state.addedValue)
        this.setState({ ...this.state, linkedList: this.linkedList })
    }

    handleAddPosition(position: number) {
        this.addPosition(this.state.addedValue, position);
        this.setState({ ...this.state, linkedList: this.linkedList });
    }

    handleRemove(position: number) {
        this.linkedList.remove(position);
        this.setState({ ...this.state, linkedList: this.linkedList });
    }

    handleChange(e: any) {
        this.setState({ ...this.state, addedValue: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>Linked list</h1>
                <div>
                    <Box>
                        <Form
                            title="Add node to tail"
                            handleAdd={this.handleAdd}
                            value={this.state.addedValue}
                            onChange={this.handleChange}></Form>
                    </Box>

                </div>
                <div>
                    <NodeList linkedList={this.state.linkedList} onClick={this.handleAddPosition}
                        addedValue={this.state.addedValue}
                        handleChange={this.handleChange}
                        handleRemove={this.handleRemove}></NodeList>
                </div>
                <div>
                    <Console list={this.state.linkedList.getLogs()}></Console>
                </div>
            </div >
        )
    }
}