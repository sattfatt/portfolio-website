import TextBox from "./TextBox";
import "../Styles/Skills.css"

function Skill(props) {
    return (
        <span id={props._id} className="skill">{props.children}</span>
    )
}

function Skills(props) {

    let allSkills = [];
    
    for(let [category, skills] of Object.entries(props.skills)) {
        allSkills.push(<div className="flex-row">{skills.map((skill, index) => {return <Skill _id={category} key={index}>{skill}</Skill>})}</div>)
    }
    if (props.mini) {
        return (
            <div className="mini-container">
                {allSkills}
            </div>
        )
    }
    return (
        <TextBox title={props.title} _id={props.id}>
             {allSkills}
        </TextBox>
    )
}

export default Skills