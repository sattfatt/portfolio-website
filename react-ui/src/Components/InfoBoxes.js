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
                    <Expandable title="a" classes="scrollable" _ref="1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus suscipit, adipisci, assumenda blanditiis dolores deleniti distinctio corrupti, iusto molestiae sit at laborum inventore doloribus eos odio corporis provident consequuntur. Qui, in. Debitis hic repudiandae ducimus, eveniet voluptatem minus iusto optio. Quibusdam, sint nesciunt? Dolorum aliquam ut in atque tenetur voluptatum, sed iusto fugiat totam consectetur similique, odit reprehenderit? Quo qui alias autem a fuga fugit ad molestiae fugiat hic doloremque laborum, numquam eaque blanditiis nemo dolorem amet nihil ex quas ullam rerum consectetur suscipit officiis rem consequatur. Numquam et iste dolorum? Repellat, error! Soluta officiis debitis nulla recusandae reiciendis.
                    </Expandable>
                    <Expandable title="b" classes="scrollable"  _ref="2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, harum? Maxime nam voluptatem, dolore ab magni non similique ipsam quo corporis, nisi mollitia reiciendis repudiandae illo illum quibusdam voluptas ut.
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