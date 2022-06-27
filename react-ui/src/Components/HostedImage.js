import "../Styles/GDriveImage.css";
import "../Hooks/OnScreen";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {off, on} from "../Utilities/Events";
import useOnScreen from "../Hooks/OnScreen";

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

const delay = async (ms) => {
    await sleep(ms);
}

function buildThresholdList(numSteps) {
    let thresholds = [];

    for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
}


function HostedImage(props) {

    const div_ref = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [load, setLoad] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [className, setClassName] = useState("img-unloaded")
    let options = {
        rootMargin: '200px',
        threshold: buildThresholdList(100)
    }
    useOnScreen(div_ref, props.unique, options);
    useLayoutEffect(_ => {
        delay(3000).then(() => {
            setIsReady(true)
        });
        const onIntersect = (e) => {
            console.log(isReady + " " + e.detail)
            if (e.detail) {
                setLoad(true);
            }
        }
        on(props.unique, onIntersect);
        return _ => off(props.unique, onIntersect);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            setClassName("img-loaded")
        }
    }, [isLoaded])


    function computeCaption() {
        if (props.caption !== undefined) {
            return <div className="img-caption">{props.caption}</div>
        }
        return <div/>
    }

    const caption = computeCaption()


    if (load === false) return (<div className={className} style={{width: "80vw", height: "120vh"}} ref={div_ref}/>);

    else if (props.linkTo) return (
        <a className="img-link" href={props.url} target="_blank" rel="noopener noreferrer">
            <div ref={div_ref}
                 className={props.type === "background" ? "gd-image-container-back" : "gd-image-container-normal" + " " + className}
                 style={{zIndex: props.z ? props.z : 0}}>
                <img onLoad={() => setIsLoaded(true)}
                     src={props.url ? props.url : `https://drive.google.com/uc?export=view&id=${props.img_id}`}/>
                {caption}
            </div>
        </a>
    )

    else return (
            <div ref={div_ref}
                 className={props.type === "background" ? "gd-image-container-back" : "gd-image-container-normal" + " " + className}
                 style={{zIndex: props.z ? props.z : 0}}>
                <img onLoad={() => setIsLoaded(true)}
                     src={props.url ? props.url : `https://drive.google.com/uc?export=view&id=${props.img_id}`}/>
                {caption}
            </div>
        )
}

export default HostedImage;