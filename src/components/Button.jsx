import React, { Component } from "react"

export default props => {
    return (
        <div>
            <button onClick={props.onClick}>
                Add node
            </button>
        </div>
    )
}