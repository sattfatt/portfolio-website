
import "../Styles/Image.css"

function Image(props) {
    return (
        <div className={props.type==="background"?"image-container-back":"image-container-normal"} style={{zIndex:props.z?props.z:0}}>
            <img src={props.path}></img>
        </div>
    )
}

export default Image;