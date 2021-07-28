import React, { useState } from 'react';
import Modal from "react-modal";
import './Node.scss';
import './Modal.scss';
import './Rectangle.scss';
import Form from './Form';
import { NodeProperties } from '../types/NodeProperties';


const Node: React.FC<NodeProperties> = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    function handleAddModal() {
        props.onClick(props.addedPosition);
        toggleModal();
    }

    function removeNode() {
        props.handleRemove(props.id);
    }

    return (
        (
            <div>
                <div className="containerNode">
                    <div className="rectangle">
                        <div>value: {props.value}</div>
                    </div>
                    <button className="buttonAdd" onClick={toggleModal}>
                        <span>+</span>
                    </button>

                    <button className="buttonRemove" onClick={removeNode}>
                        <span>x</span>
                    </button>

                    <div className="rightArrow">&#8594;</div>

                    <Modal
                        isOpen={isOpen}
                        onRequestClose={toggleModal}
                        contentLabel="My dialog"
                        className="mymodal"
                        overlayClassName="myoverlay"
                        closeTimeoutMS={50}
                    >

                        <div>Add next node</div>
                        <button onClick={toggleModal}>Close modal</button>

                        <div>
                            <Form
                                handleAdd={handleAddModal}
                                value={props.addedValue}
                                onChange={props.handleChange}></Form>
                        </div>
                    </Modal>

                </div>
            </div>
        )
    );
};

export default Node;