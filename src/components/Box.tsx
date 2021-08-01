import "./Box.scss";

function Box(props: any) {
    return (
        <div className="box">
            {props.children}
        </div>
    )
}

export default Box;