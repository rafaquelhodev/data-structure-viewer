import React from "react"
import Button from "./Button"

export default props => {
    return (<div role="form" className="todoForm">
        <div className="row">
            <input id="description"
                className="form-control"
                placeholder="Node value"
                value={props.value}
                onChange={props.onChange}></input>

            <Button onClick={props.handleAdd}></Button>
        </div>
    </div>)
}