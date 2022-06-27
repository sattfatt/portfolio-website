import {useEffect, useRef} from 'react';
import useOnScreen from '../Hooks/OnScreen';
import {off, on} from '../Utilities/Events';
import cubes from '../Videos/FancyCubes.mp4'

function buildThresholdList(numSteps) {
    let thresholds = [];

    for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
}


function FancyCubes() {
    const vid_ref = useRef(null);
    let options = {
        rootMargin: '0px',
        threshold: buildThresholdList(100)
    }
    useOnScreen(vid_ref, "fancy-cubes", options);
    useEffect(_ => {
        const onIntersect = (e) => {
            e.detail == false ? vid_ref.current.pause() : vid_ref.current.play()
        };
        on("fancy-cubes", onIntersect);

        return _ => {
            off("fancy-cubes", onIntersect)
        };
    }, [])

    return (
        <video ref={vid_ref} className="fancy-cubes" src={cubes} type="video/mp4" autoPlay loop muted
               playsInline></video>
    )
    
}

export default FancyCubes;