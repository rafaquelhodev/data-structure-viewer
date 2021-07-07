import React, { InputHTMLAttributes, MouseEvent, useState } from 'react';
import Modal from "react-modal";
import './Node.scss';
import './Modal.scss';
import Form from './Form';


interface InputProps2 {
    id: number;
    value: number;
    onClick: (arg: number) => void;
    handleRemove: (arg: number) => void;
    handleChange: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    addedValue: number;
    addedPosition: number;
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

const Node: React.FC<InputProps2> = (props) => {
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
            <div key={props.id}>
                <div className="containerNode">
                    <div className="rectangle" style={rectangle}>
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