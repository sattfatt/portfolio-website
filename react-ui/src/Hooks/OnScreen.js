import { useEffect, useState } from "react";
import { trigger } from "../Utilities/Events";

function useOnScreen(ref, eventType) {

    const observer = new IntersectionObserver(([entry]) => {trigger(eventType, entry.isIntersecting)});
    useEffect(() => {
        observer.observe(ref.current);
        
        return () => {observer.disconnect()};
    },[]);
}

export default useOnScreen;