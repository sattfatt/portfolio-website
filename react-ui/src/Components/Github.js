import { VscGithubInverted as Gicon } from "react-icons/vsc"
import "../Styles/Github.css"

function Github(props) {
    return (
        <div className="github-container">
            <a href={props.linkTo} target="_blank" rel="noopener noreferrer">
                <Gicon></Gicon>
            </a>
        </div>
    )
}

export default Github;