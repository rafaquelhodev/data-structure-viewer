import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: number;
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

const Node: React.FC<InputProps> = (props) => {
    return (
        (<div style={rectangle}>
            <div>value: {props.value}</div>
        </div>)
    );
};

export default Node;