import Expandable from "./ExpandableBox";
import TextBox from "./TextBox";
import Skills from "./Skills"
import Video from "./Video";
import GdImageBackground from "./GDriveImage";

function InfoBoxes() {

    const skills = {
        Programming: ['Python', 'C', 'C#', 'C++', 'MATLAB', 'Nodejs', 'React', 'MongoDB', 'Express', 'Javascript', 'HTML', 'CSS', 'REST', 'MASM'],
        Electrical: ['System Verilog', 'Arduino', 'Psim', 'LTSpice', 'PSpice', 'Signals & Systems', 'ESP32', 'CAD', 'Raspberry Pi'],
        GameDev: ['Unity', 'Blender', 'Finale', 'Photoshop', 'Gimp', 'Ableton', 'Powerpoint', 'Figma'],
        Concepts: ['OOP', 'MVC', 'Usability', 'Graphs', 'BST', 'Data Structures'],
        Misc: ['Excel', 'Word']
    };

    return (
        <div className="info-box">
            <TextBox title="About Me">
                Hello my name is Satyam Patel.
                I am a budding Computer Scientist, Electrical Engineer, Amateur Game Dev and Amateur C.G. Artist.
                I like to make stuff. It doesn't matter what it is, as long as it is something!
            </TextBox>

            <div className="flex-row-boxes">
                <Skills unique="main-skills" title="Skills" skills={skills} id="skills" />
                <TextBox title="Education" _id="education">
                    <div className="flex-col-boxes">
                        <TextBox title="B.S. Electrical Engineering" _id="edu">
                            UCSD, April 2018
                        </TextBox>
                        <TextBox title="B.S. Computer Science" _id="edu">
                            Oregon State University, Summer 2022
                        </TextBox>
                    </div>
                </TextBox>
            </div>

            <TextBox title="Projects">
                <div className="flex-row-boxes">
                    <Expandable title="The Third Eye" classes="scrollable" _ref="1">

                        <div className="project-description">
                            An interactive virtual classroom environment built in the Unity game engine. Features 3D graphing, chat interaction, and more!
                            <Skills unique="third-eye-skills" mini skills={{ GameDev: ['Unity', 'Blender', 'Photoshop'], Programming: ['C#'] }}></Skills>
                        </div>

                        <div className="flex-row">
                            <div className="feature-list-container">
                                Features:
                                <ul>
                                    <li>3D Graphing</li>
                                    <li>2D Graphing</li>
                                    <li>In-game LaTeX rendering</li>
                                    <li>Group action visualization of various shapes</li>
                                    <li>Island to hold events (Like a final exam)</li>
                                    <li>Floating window that captures your note taking application!</li>
                                    <li>IRC Chat Interaction</li>
                                </ul>
                            </div>
                            <Video>
                                <iframe className="aspect-content" src='https://www.youtube.com/embed/3SglaCG5mlE?start=3360&end=3390' frameBorder='0' allowFullScreen></iframe>
                            </Video>
                        </div>
                        <GdImageBackground img_id="1-FHNxzlRQyyuuePdp5kCzNzHexCfHc3B" type="background" />
                    </Expandable>
                    <Expandable title="This Website" classes="scrollable" _ref="2">
                        <div className="project-description">
                            This website is also one of my projects! I built it using the React framework and handled all the animations and overlays myself using jsx.
                            <Skills unique="website-skills" mini skills={{ Programming: ['Nodejs', 'React', 'Javascript', 'HTML', 'CSS'] }}></Skills>
                        </div>
                    </Expandable>
                    <Expandable title="LightBox" classes="scrollable" _ref="3">
                        <div>
                            A 3D printed box that lights things up on top of it. Features fully remote control via web api and udp communication.
                            <Skills unique="lightbox-skills" mini skills={{ Electrical: ['Raspberry Pi', 'ESP32', 'Arduino'], Programming: ['C', 'C#'] }}></Skills>
                        </div>
                    </Expandable>
                    <Expandable title="Exercise Tracker" classes="scrollable" _ref="4">
                        <div>
                            A simple full-stack MERN application that allows the user to bookeep their exercises. Features RESTful api and CRUD operations to a database.
                            <Skills unique="exercise-skills" mini skills={{ Programming: ['MongoDB', 'Express', 'Nodejs', 'React', 'Javascript', 'HTML', 'CSS'] }}></Skills>
                        </div>
                    </Expandable>
                    <Expandable title="Bhimsen" classes="scrollable" _ref="5">
                        <div>
                            An indian classical rhythm game built in the Unity engine.
                            <Skills unique="bhimsen-skills" mini skills={{ GameDev: ['Unity', 'Blender', 'Photoshop'], Programming: ['C#'] }}></Skills>
                        </div>
                    </Expandable>
                    <Expandable title="Fun AI" classes="scrollable">
                        <div>
                            A 1v1 game that slowly reaches an optimal state. Each AI agent is controled via a FFNN and weights are updated using a genetic algorithm.
                            <Skills unique="ai-skills" mini skills={{Programming:["Python"]}}></Skills>
                        </div>
                    </Expandable>
                </div>
            </TextBox>
        </div>
    );
}

export default InfoBoxes;