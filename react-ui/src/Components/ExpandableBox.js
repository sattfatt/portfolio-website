import { useEffect, useLayoutEffect, useState } from "react";
import TextBox from "./TextBox";
import {useRef} from "react";


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function Expandable(props) {

    const modalEl = useRef(null);
    const initialEl = useRef(null);
    const parentEl = useRef(null);
    const [overlayStyle, setOverlayStyle] = useState({position:"absolute"})
    const [oToggle, setOtoggle] = useState("off")

    const moveToCenter = () => {
        const x = window.innerWidth / 2 ;
        const y = window.innerHeight / 2 ;
        const offsetx = initialEl.current.getBoundingClientRect().width / 2;
        const offsety = initialEl.current.getBoundingClientRect().height / 2;
        const rect = {top:y-offsety, left:x-offsetx, width: offsetx*2, height: offsety*2, transition:"0.2s ease", position:"fixed"}
        setOverlayStyle(rect);
        return rect;
    }

    const moveToInitial = () => {
        const left = initialEl.current.getBoundingClientRect().left;
        const top = initialEl.current.getBoundingClientRect().top;
        const leftP =  parentEl.current.getBoundingClientRect().left;
        const topP = parentEl.current.getBoundingClientRect().top;
        setOverlayStyle({top: top - topP-10, left: left - leftP-10, position:"absolute"});
    }

    const moveToParent = async () => {
        const leftP =  parentEl.current.getBoundingClientRect().left;
        const topP = parentEl.current.getBoundingClientRect().top;
        setOverlayStyle({top: topP, left: leftP, margin:10, transition:"none", position:"fixed", visibility:"hidden", opacity:0});
        await sleep(1);
    }

    const onClick = (e) => {
        if (oToggle === "off") {
            
            setOtoggle("on");
            moveToParent().then(moveToCenter)
           // moveToCenter();
            
        }
        else {
            moveToInitial();
            setOtoggle("off");
        }
    }

    useEffect(() => {
        const handleWindowChange = (e) => {          
            if (oToggle==="on") {
                moveToCenter();
            }
        }
        window.addEventListener('resize', handleWindowChange);
        return () => {
            window.removeEventListener('resize', handleWindowChange);
        }
    });



    return (
        <div className="expandable-container" ref={parentEl}>
            <div className={"scroll-clip-overlay-"+oToggle} ref={modalEl} style={overlayStyle}>
                <TextBox title={props.title} _id={props._id} classes={props.classes} _onClick={onClick}>
                    {props.children}
                </TextBox>
            </div>
            <div className="scroll-clip" ref={initialEl}>
                <TextBox title={props.title} _id={props._id} classes={props.classes}>
                    {props.children}
                </TextBox>
                
            </div>
            
        </div>
    );
}

export default Expandable;