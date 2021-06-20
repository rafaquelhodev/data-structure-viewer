import React from "react"
// import Grid from "../template/grid"
// import IconButton from "../template/iconButton"
import Button from "./Button"

export default props => {
    // const keyHandler = (e) => {
    //     if (e.key === "Enter") {
    //         e.shiftKey ? props.handleSearch() : props.handleAdd()
    //     } else if (e.key === "Escape") {
    //         props.handleClear()
    //     }
    // }

    return (<div role="form" className="todoForm">
    <div className="row">
            <input id="description"
                className="form-control"
                placeholder="Add a task"
                value={props.value}
                onChange={props.onChange}></input>

            <Button onClick={props.handleAdd}></Button>
    </div>
</div>)
}