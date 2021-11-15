import "../Styles/GDriveImage.css"

function GdImage(props) {
    return (
        <div className={props.type==="background"?"gd-image-container-back":"gd-image-container-normal"} style={{zIndex:props.z?props.z:0}}>
            <img src={props.url?props.url:`https://drive.google.com/uc?export=view&id=${props.img_id}`}></img>
        </div>
    )
}

export default GdImage;