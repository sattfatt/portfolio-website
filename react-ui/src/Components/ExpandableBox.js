import { useEffect, useLayoutEffect, useState } from "react";
import TextBox from "./TextBox";
import {useRef} from "react";

function Expandable(props) {

    const originalEl = useRef(null);
    const modalEl = useRef(null);
    const [ogrect, setOgrect] = useState({top:0, left:0, width:0, height:0})
    const [modalrect, setModalrect] = useState({top:0, left:0, width:0, height:0})

    //useEffect(() => {
    //    const temp1 = originalEl.current.getBoundingClientRect();
    //    const temp2 = modalEl.current.getBoundingClientRect();
    //    setOgrect({top:temp1.top, left:temp1.left, width:temp1.width, height:temp1.height});
    //    setModalrect({top:temp2.top, left:temp2.left, width:temp2.width, height:temp2.height});
    //}, []);

    return (
        <div className="expandable-container">
            <div className="scroll-clip-overlay" ref={modalEl}>
                <TextBox title={props.title} _id={props._id} >
                    {props.children}
                </TextBox>
            </div>
            <div className="scroll-clip" ref={originalEl}>
                <TextBox title={props.title} _id={props._id}>
                    {props.children}
                </TextBox>
                
            </div>
            
        </div>
    );
}

export default Expandable;