import React, { Component } from "react"
import Button from '../components/Button';
import Form from "../components/Form";
import Node from "../components/Node";
import { DataStructure } from "../dataStructures/dataStructure";
import { LinkedListDs } from "../dataStructures/linkedList";


export default class LinkedList extends Component<{}, { linkedList: LinkedListDs, addedValue: number }>{

    private linkedList: LinkedListDs;

    constructor(props: any) {
        super(props)

        this.linkedList = new LinkedListDs();

        this.state = { linkedList: this.linkedList, addedValue: 1 }

        this.add = this.add.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    add(arg: number): void {
        this.linkedList.add(arg);
        console.log(this.linkedList.getHead());
    }

    handleAdd() {
        this.add(this.state.addedValue)
        this.setState({ ...this.state, linkedList: this.linkedList })
    }

    handleChange(e: any) {
        this.setState({ ...this.state, addedValue: e.target.value })
    }

    render() {
        return (
            <div>
                <div>
                    <Form
                        handleAdd={this.handleAdd}
                        value={this.state.addedValue}
                        onChange={this.handleChange}></Form>
                </div>
                <div>
                    <Node linkedList={this.state.linkedList}></Node>
                </div>
            </div>
        )
    }
}