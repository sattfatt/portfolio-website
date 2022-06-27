import {useEffect} from "react";
import {trigger} from "../Utilities/Events";

function useOnScreen(ref, eventType, options = null) {

    let observer = null;
    if (options) observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0.1) {

                trigger(eventType, entry.isIntersecting)
            } else {
                trigger(eventType, false);
            }
        })
    }, options);

    else observer = new IntersectionObserver(([entry]) => {
        trigger(eventType, entry.isIntersecting)
    });

    useEffect(() => {
        observer.observe(ref.current);

        return () => {
            observer.disconnect()
        };
    }, []);
}

export default useOnScreen;