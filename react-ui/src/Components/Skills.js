import TextBox from "./TextBox";
import "../Styles/Skills.css"
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import useOnScreen from "../Hooks/OnScreen";
import { off, on, trigger, triggerAsync } from "../Utilities/Events";

function Skill(props) {
    const ref = useRef(null);
    return (
        <span ref={ref} id={props._id} className={"skill"} style={{ "--index": ref.current?ref.current.getBoundingClientRect().left - props.thisEl.current.getBoundingClientRect().left : 0 }}>{props.children}</span>
    )
}

function Skills(props) {
    const all_skills = useRef(null);
    const skill_row = useRef(null);
    useOnScreen(all_skills, props.unique);
    const [className, setClassName] = useState("flex-row wave-parent")

    useEffect(_ => {
        const onIntersect = e => e.detail?setClassName("flex-row wave-parent"):setClassName("flex-row")
        on(props.unique, onIntersect);
        return _ => {off(props.unique, onIntersect)};
    }, []);

    let allSkills = [];
    let i = 0;
    for (let [category, skills] of Object.entries(props.skills)) {
        allSkills.push(<div ref={skill_row} className={className} key={i}>{skills.map((skill, index) => { return <Skill thisEl={all_skills} _id={category} key={index} >{skill}</Skill> })}</div>)
        i += 1;
    }

    const allSkillsEl = <div ref={all_skills} className={props.mini?"mini-container":"all-skills"} key="all">{allSkills}</div>;

    if (props.mini) {
        return (
            <>
            {allSkillsEl}
            </>
        )
    }
    return (
        <TextBox title={props.title} _id={props.id}>
            {allSkillsEl}
        </TextBox>
    )
}

export default Skills