import HostedImage from "./HostedImage";
import Lotus from "./Lotus";
import "../Styles/Landing.css";
import DownArrow from "./DownArrow";
import cubes from '../Videos/FancyCubes.mp4'
import FancyCubes from "./FancyCubes";

function Landing() {

    return (
        <>
            <div className="background-video-landing">
                <FancyCubes></FancyCubes>
            </div>
            <div className="full-page-view">

                <div className="flex-row-lotus ontop"><Lotus></Lotus></div>
                <h1 className="ontop">It's me Satyam!</h1>
                <em className="ontop">I like to make stuff. Doesn't matter what it is, as long as it's something!</em>
                <em className="ontop"><br/>satyam.p.patel94@gmail.com</em>
                <div className="down-arrow ontop" onClick={scrollToFirst}><DownArrow></DownArrow></div>
            </div>
        </>
    );
}

function scrollToFirst() {
    const el = document.getElementById('scroll-to-first');
    el.scrollIntoView({ behavior: "smooth" });
}

export default Landing;