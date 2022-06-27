import VidRefreshContext from "../Contexts/VideoRefreshContext";
import "../Styles/Video.css"

function Video(props) {
    return (
        <VidRefreshContext.Consumer>
            {
                (data) => {
                    if (data) {
                        return (
                            <div className="video-container">
                                <div className="aspect-container">
                                    {props.children}
                                </div>
                            </div>
                        )
                    }
                    return (<div></div>)
                }
            }
        </VidRefreshContext.Consumer>
    )
}

export default Video;