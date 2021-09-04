import TextBox from "./TextBox";
import "../Styles/Skills.css"
import { useEffect, useState, useRef } from "react";
import useOnScreen from "../Hooks/OnScreen";
import { off, on, trigger, triggerAsync } from "../Utilities/Events";

function Skill(props) {

    const ref = useRef(null);
    const [className, setClassName] = useState("skill wave");

    useEffect(() => {
        //const onRefresh = e => {
        //    if (e.detail){
        //        setClassName("skill wave");
        //    }
        //    else{
        //        setClassName("skill hide");
        //    }
        //}
        //on(props.unique, onRefresh);
        //return _ => off(props.unique, onRefresh)
    }, [])

    return (
        <span ref={ref} id={props._id} className={props.refresh?"skill wave":"skill hide"} style={{ "--index": ref.current? ref.current.getBoundingClientRect().left : 0 }}>{props.children}</span>
    )
}

function Skills(props) {
    const ref = useRef(null);
    useOnScreen(ref, props.unique);
    const [refresh, setRefresh] = useState(false);

    useEffect(_ => {
        //const onIntersect = e => trigger(props.unique+":refresh", e.detail);
        const onIntersect = e => {console.log("refresh");setRefresh(!refresh)}
        on(props.unique, onIntersect);
        return _ => {off(props.unique, onIntersect)};
    }, []);

    let allSkills = [];
    let i = 0;
    for (let [category, skills] of Object.entries(props.skills)) {
        allSkills.push(<div className="flex-row" key={i}>{skills.map((skill, index) => { return <Skill refresh={refresh} unique={props.unique} _id={category} key={index} >{skill}</Skill> })}</div>)
        i += 1;
    }

    const allSkillsEl = <div ref={ref} className={props.mini?"mini-container":"all-skills"} key="all">{allSkills}</div>;

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