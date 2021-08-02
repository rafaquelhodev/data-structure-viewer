import React from "react";
import Button from "./Button";
import "./Form.scss";

export default props => {

    let title = <></>;
    if (props.title) {
        title = <div className="form-title">{props.title}</div>;
    }

    return (<div role="form" className="todoForm">
        <div className="row">
            {title}
            <input id="description"
                className="form-control"
                placeholder="Node value"
                value={props.value}
                onChange={props.onChange}></input>

            <Button onClick={props.handleAdd}></Button>
        </div>
    </div>)
}