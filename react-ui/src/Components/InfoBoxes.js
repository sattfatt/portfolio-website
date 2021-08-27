import Expandable from "./ExpandableBox";
import TextBox from "./TextBox";


function InfoBoxes() {

    const skills = {
        Programming: ['Python', 'C', 'C#', 'C++', 'MATLAB', 'Nodejs', 'React', 'MongoDB', 'Express', 'HTML', 'CSS', 'REST', 'MASM'],
        Electrical: ['System Verilog', 'Arduino', 'Psim', 'LTSpice', 'PSpice', 'Signals & Systems', 'ESP32', 'CAD', 'Raspberry Pi'],
        GameDev: ['Unity', 'Blender', 'Finale', 'Photoshop', 'Gimp', 'Ableton'],
        Misc: ['Excel', 'Word', 'Powerpoint', 'Figma']
    };

    const mapFunc = (skill, index) => { return <span className="skill" key={index}>{skill}</span> };

    const programming = skills.Programming.map((skill, index) => { return <span className="skill" id="programming" key={index}>{skill}</span> });
    const electrical = skills.Electrical.map((skill, index) => { return <span className="skill" id="electrical" key={index}>{skill}</span> });
    const game = skills.GameDev.map((skill, index) => { return <span className="skill" id="game" key={index}>{skill}</span> });
    const misc = skills.Misc.map((skill, index) => { return <span className="skill" id="misc" key={index}>{skill}</span> });

    return (
        <div className="info-box">
            <TextBox title="About Me">
                Hello my name is Satyam Patel.
                I am a budding Computer Scientist, Electrical Engineer, Amateur Game Dev and Amateur C.G. Artist.
                I like to make stuff. It doesn't matter what it is, as long as it is something!
            </TextBox>

            <div className="flex-row-boxes">
                <TextBox title="Skills Snapshot" _id="skills">
                    <div className="flex-row">{programming}</div>
                    <div className="flex-row">{electrical}</div>
                    <div className="flex-row">{game}</div>
                    <div className="flex-row">{misc}</div>
                </TextBox>
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
                            The Third Eye is an interactive virtual classroom environment build in the Unity game engine. 
                        </div>
                        <div className="feature-list-container">
                            <br></br>
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
                        <div>
                            <iframe width="448" height="252" src="https://www.youtube.com/embed/3SglaCG5mlE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </Expandable>
                    <Expandable title="This Website" classes="scrollable" _ref="2">
                        <div className="project-description">
                            This website is also one of my projects! I built it using the React framework and handled all the animations and overlays myself using jsx.
                        </div>
                    </Expandable>
                    <Expandable title="c" classes="scrollable"  _ref="3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aperiam a laudantium reiciendis alias non explicabo magnam, qui quae dolores dicta animi et rem pariatur, molestias amet consequatur, consequuntur neque.
                    </Expandable>
                    <Expandable title="d" classes="scrollable"  _ref="4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quod alias impedit sed cum aliquid fugit dicta nobis! Libero dignissimos amet quidem maiores eum dicta modi voluptate dolores voluptas quod.
                    </Expandable>
                </div>
            </TextBox>

        </div>
    );
}

export default InfoBoxes;