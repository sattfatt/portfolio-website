import "../Styles/GDriveImage.css";
import "../Hooks/OnScreen";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { once, on, off } from "../Utilities/Events";
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

  for (let i=1.0; i<=numSteps; i++) {
    let ratio = i/numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

function GdImage(props) {

    const div_ref = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isReady, setIsReady] = useState(false);
    let options = {
        rootMargin: '0px',
        threshold: buildThresholdList(100)
      }
    useOnScreen(div_ref, props.unique, options);
    useLayoutEffect(_ => {
        delay(3000).then(() => {setIsReady(true)});
        const onIntersect = (e) => { 
          console.log(isReady + " " + e.detail)
          if (e.detail) {
            setIsLoaded(true);
          }
        }
        on(props.unique, onIntersect);
        return _ => off(props.unique, onIntersect);
    }, []);

    if (isLoaded===false) return (<div style={{width: "80vw", height: "100vh"}} ref={div_ref}></div>);

    else if (props.linkTo) return (
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <div ref={div_ref} className={props.type==="background"?"gd-image-container-back":"gd-image-container-normal"} style={{zIndex:props.z?props.z:0}}>
              <img src={props.url?props.url:`https://drive.google.com/uc?export=view&id=${props.img_id}`}></img>
          </div>
        </a>
    )

    else return (
      <div ref={div_ref} className={props.type==="background"?"gd-image-container-back":"gd-image-container-normal"} style={{zIndex:props.z?props.z:0}}>
        <img src={props.url?props.url:`https://drive.google.com/uc?export=view&id=${props.img_id}`}></img>
      </div>
    )
}

export default GdImage;