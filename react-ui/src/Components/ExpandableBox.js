import { useEffect, useLayoutEffect, useState } from "react";
import TextBox from "./TextBox";
import VidRefreshContext from "../Contexts/VideoRefreshContext";
import "../Styles/ExpandableBox.css";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function Expandable(props) {
    const [overlayStyle, setOverlayStyle] = useState({position:"fixed"})
    const [oToggle, setOtoggle] = useState("off")
    const [delayedToggle, setDelayedToggle] = useState(false);

    const moveToCenter = () => {
        const rect = {
            top:"50%", 
            left:"50%", 
            transform:"translate(-50%, -50%)", 
            width: "70vw", 
            transition:"0.5s ease", 
            position:"fixed"
        } 
        setOverlayStyle(rect);
        return rect;
    }

    const moveToFirst = async () => {
        setOverlayStyle({
            top:"50%", left:"50%", 
            transform:"translate(-50%, -55%)", 
            //width: "70vw", 
            "max-height":"90vh",
            transition:"none", 
            position:"fixed", 
            visibility:"hidden", 
            opacity:0
        });
        await sleep(100);
    }

    const delay = async (ms) => {
        await sleep(ms);
    }

    const onClick = (e) => {
        if (oToggle === "off") {          
            setOtoggle("on");
            moveToFirst().then(moveToCenter)
            setDelayedToggle(true);
        }
        else {
            setOtoggle("off");
            delay(400).then(()=>{setDelayedToggle(false)});
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
        <VidRefreshContext.Provider value={delayedToggle}>
            <div className="expandable-container">
                <div className={"scroll-clip-overlay-"+oToggle} style={overlayStyle}>
                    <TextBox title={props.title} _id={props._id} classes={props.classes} >
                        {props.children}
                    </TextBox>
                </div>
                <div className="scroll-clip">
                    <TextBox title={props.title} _id={props._id} classes={props.classes} _onClick={onClick}>
                        {props.children[0] ? props.children[0] : props.children}
                    </TextBox>
                </div>
                <div className={"back-blur-"+oToggle} onClick={onClick}>

                </div>
            </div>
        </VidRefreshContext.Provider>
        
    );
}

export default Expandable;