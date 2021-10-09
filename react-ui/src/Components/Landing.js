import GdImage from "./GDriveImage";
import Lotus from "./Lotus";
import "../Styles/Landing.css";
import DownArrow from "./DownArrow";

function Landing() {

    return (
        <div className="full-page-view">
            <div className="flex-row-lotus"><Lotus></Lotus></div>
            <h1>It's me Satyam!</h1>
            <em>I like to make stuff. Doesn't matter what it is, as long as it's something!</em>
            <div className="down-arrow" onClick={scrollToFirst}><DownArrow></DownArrow></div>
        </div>
    );
}

function scrollToFirst() {
    const el = document.getElementById('scroll-to-first');
    el.scrollIntoView({behavior:"smooth"});
}

export default Landing;