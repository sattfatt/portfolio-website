
function TextBox(props) {
    return (

            <div className="text-box" id={props._id} onClick={props._onClick}>
                <div className="flex-row">
                    <div className="box-title" id={props._id + "-title"}>{props.title}</div>
                </div>
                <div className="body-text">{props.children}</div>
            </div>


    )
}

export default TextBox;