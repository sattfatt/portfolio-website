import "../Styles/GDriveImage.css"

function GdImage(props) {
    return (
        <div className={props.type==="background"?"gd-image-container-back":"gd-image-container-normal"}>
            <img src={`https://drive.google.com/uc?export=view&id=${props.img_id}`}></img>
        </div>
    )
}

export default GdImage;