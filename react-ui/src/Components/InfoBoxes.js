import Expandable from "./ExpandableBox";
import TextBox from "./TextBox";
import Skills from "./Skills"
import Video from "./Video";
import GdImageBackground from "./HostedImage";
import HostedImage from "./HostedImage";
import Github from "./Github";
import Image from "./Image";
import bhimsen_screenshot from "../Videos/screenshot.png";
import asteroid_screenshot from "../Videos/Screen1.png"

var iota = 0

function Iota() {
    return iota++
}

function InfoBoxes() {

    const label = {
        Personal: "Personal",
        Work: "Work"
    }

    const skills = {
        Programming: ['Vue.js', 'GCP', 'Go', 'Python', 'C', 'C#', 'C++', 'MATLAB', 'Nodejs', 'React', 'MongoDB', 'Express', 'Javascript', 'HTML', 'CSS', 'REST', 'MASM', 'OpenGL', 'Linux', 'WSL'],
        Electrical: ['System Verilog', 'Arduino', 'Psim', 'LTSpice', 'PSpice', 'Signals & Systems', 'ESP32', 'CAD', 'Raspberry Pi'],
        GameDev: ['Unity', 'Blender', 'Finale', 'Photoshop', 'Gimp', 'Ableton', 'Powerpoint', 'Figma'],
        Concepts: ['OOP', 'MVC', 'Usability', 'Graphs', 'BST', 'Data Structures'],
        Misc: ['Excel', 'Word']
    };

    return (
        <div className="info-box" id="scroll-to-first">
            <TextBox title="About Me">
                Hello my name is Satyam Patel.
                I am a budding Computer Scientist, Electrical Engineer, Amateur Game Dev and Amateur C.G. Artist.
                I like to make stuff. It doesn't matter what it is, as long as it is something!
            </TextBox>

            <div className="flex-row-boxes">
                <Skills unique="main-skills" title="Skills" skills={skills} id="skills"/>

                <TextBox title="Education" _id="education">
                    <div className="flex-col-boxes">
                        <TextBox title="B.S. Electrical Engineering" _id="edu">
                            UCSD, April 2018
                        </TextBox>
                        <TextBox title="B.S. Computer Science" _id="edu">
                            Oregon State University, December 2022
                        </TextBox>
                    </div>
                </TextBox>
                <TextBox title="Work" _id="work">
                    <div className="flex-col-boxes">
                        <TextBox title="Engineering Aide" _id="work">
                            Scripps Institute of Oceanography, 2014-2017
                        </TextBox>
                        <TextBox title="Online Instructor" _id="work">
                            idTech, 2021
                        </TextBox>
                        <TextBox label="Current" title="Software Intern" _id="work">
                            Rockbot, 2022
                        </TextBox>
                    </div>
                </TextBox>
            </div>

            <TextBox title="Projects">
                <div className="flex-row-boxes">
                    <Expandable label={label.Personal} title="The Third Eye" classes="scrollable" _ref={Iota()}>
                        <div className="project-description">
                            An interactive virtual classroom environment built in the Unity game engine. Features 3D
                            graphing, chat interaction, and more!
                            <Skills unique="third-eye-skills" mini
                                    skills={{GameDev: ['Unity', 'Blender', 'Photoshop'], Programming: ['C#']}}></Skills>
                        </div>
                        <GdImageBackground url="https://i.imgur.com/0ItBHhB.png" type="background" z={-1}/>
                        This app was used at Oklahoma State University for Calculus III During the peak of the COVID
                        pandemic. <br/>
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
                                <iframe className="aspect-content"
                                        src='https://www.youtube.com/embed/3SglaCG5mlE?start=3360&end=3390'
                                        frameBorder='0' allowFullScreen></iframe>
                            </Video>
                        </div>
                    </Expandable>
                    <Expandable label={label.Personal} title="Bhimsen" classes="scrollable" _ref={Iota()}>
                        <div>
                            An indian classical rhythm game built in the Unity engine.
                            <Skills unique="bhimsen-skills" mini
                                    skills={{GameDev: ['Unity', 'Blender', 'Photoshop'], Programming: ['C#']}}></Skills>
                        </div>
                        <Image type="background" path={bhimsen_screenshot} z={-1}></Image>
                        <div>
                            <article>
                                This game is still in progress. I plan on finishing it someday as its more of a lifetime
                                goal of mine. Here is a little demo vid:
                            </article>
                            <Video>
                                <iframe className="aspect-content" src="https://www.youtube.com/embed/tVJPZCSnHF4"
                                        frameBorder='0' allowFullScreen></iframe>
                            </Video>
                        </div>
                    </Expandable>
                    <Expandable label={label.Personal} title="Asteroids Game" classes="scrollable" _ref={Iota()}>
                        <div>
                            An asteroid game built from scratch using OpenGL. This was the final project for my Graphics
                            class.
                            <Skills unique="asteroids-game-skills" mini
                                    skills={{Programming: ['C++', 'OpenGL'], GameDev: ['Blender']}}></Skills>
                        </div>
                        <Image type="background" path={asteroid_screenshot} z={-1}></Image>
                        <div>
                            <article>
                                I made this from scratch (had some initial boilerplate from the class) using OpenGL. I
                                had to learn how to implement shaders, input controls, obj files, vertex buffer objects,
                                and much more. My understanding of c++ improved greatly with this project.
                            </article>
                            <Video>
                                <iframe className="aspect-content" src="https://www.youtube.com/embed/5d8kWWdQ3kY"
                                        frameBorder='0' allowFullScreen></iframe>
                            </Video>
                        </div>
                    </Expandable>
                    <Expandable label={label.Work} title="Auto API Documentation" classes="scrollable" _ref={Iota()}>
                        <div>
                            An automatic swagger documentation generation system that analyzes Rockbot's backend and
                            generates OpenAPI spec documentation.
                            <Skills unique="api-docs-skills" mini
                                    skills={{Programming: ['Go', 'GCP', 'OpenAPI']}}></Skills>
                        </div>
                    </Expandable>
                    <Expandable label={label.Work} title="GCP Trace System" classes="scrollable" _ref={Iota()}>
                        <div>
                            Implemented OpenTelemetry tracing instrumentation in Go backend.
                            <Skills unique="opentelemetry-skills" mini
                                    skills={{Programming: ['Go', 'GCP', 'OpenTelemetry']}}></Skills>
                        </div>
                    </Expandable>
                    <Expandable label={label.Personal} title="Function Visualizer" classes="scrollable" _ref={Iota()}>
                        <div>
                            This is a fun little function visualizer. It features R2 to R map with a gradient direction
                            on the input. It also has a contour plotter. (Still trying to make the contour plotter
                            faster)
                            <Skills unique="function-skills" mini
                                    skills={{Programming: ['Nodejs', 'React', 'Javascript', 'HTML', 'CSS']}}></Skills>
                        </div>

                        <article>This app was used at Oklahoma State University for Calculus 3:&nbsp;
                            <a href="https://sattfatt.github.io/simple-function-visualizer/" target="_blank"
                               rel="noopener noreferrer">React App</a>
                        </article>
                        <Github linkTo="https://github.com/sattfatt/simple-function-visualizer"></Github>
                    </Expandable>
                    <Expandable label={label.Personal} title="This Website" classes="scrollable" _ref={Iota()}>
                        <div className="project-description">
                            This website is also one of my projects! I built it using the React framework and handled
                            all the animations and overlays myself using jsx.
                            <Skills unique="website-skills" mini
                                    skills={{Programming: ['Nodejs', 'React', 'Javascript', 'HTML', 'CSS']}}></Skills>
                        </div>
                        <Github linkTo="https://github.com/sattfatt/portfolio-website"></Github>
                    </Expandable>
                    <Expandable label={label.Personal} title="LightBox" classes="scrollable" _ref={Iota()}>
                        <div>
                            A 3D printed box that lights things up on top of it. Features fully remote control via web
                            api Twitch chat irc, and udp communication.
                            <Skills unique="lightbox-skills" mini skills={{
                                Electrical: ['Raspberry Pi', 'ESP32', 'Arduino'],
                                Programming: ['C', 'C#']
                            }}></Skills>
                        </div>
                        <span>Twitch chat bot: <Github
                            linkTo="https://github.com/sattfatt/networkledcontroller"></Github></span>
                        <span>UDP Sender GUI:<Github linkTo="https://github.com/sattfatt/LightBox"></Github></span>

                    </Expandable>
                    <Expandable label={label.Personal} title="Mini Shell" classes="scrollable" _ref={Iota()}>
                        <div className="project-description">
                            This is a simple shell program for linux written in C. It features Input/Output redirection,
                            background processes, native commands, and signal handling of SIGTSTOP and SIGINT.
                            This was my portfolio project for my operating systems class.
                            <Skills unique="mini-shell-skills" mini skills={{Programming: ['C']}}></Skills>
                        </div>
                        <article>
                            I learned a lot about how processes are organised and handled in the linux operating system
                            from this project. I learned about the fork and exec family of functions in C and how to
                            handle different signals like SIGTSTOP and SIGINT
                        </article>
                        <Github linkTo="https://github.com/sattfatt/Minishell"></Github>
                    </Expandable>
                    <Expandable label={label.Personal} title="Exercise Tracker" classes="scrollable" _ref={Iota()}>
                        <div>
                            A simple full-stack MERN application that allows the user to bookkeep their exercises.
                            Features RESTful api and CRUD operations to a database.
                            <Skills unique="exercise-skills" mini
                                    skills={{Programming: ['MongoDB', 'Express', 'Nodejs', 'React', 'Javascript', 'HTML', 'CSS']}}></Skills>
                        </div>
                        <article>
                            This project was a final project for my web development class.
                            The project taught me how important it is to separate concerns and the utility of creating
                            RESTful web services for easy CRUD operations.
                            It was cool to learn how you can integrate many different web services to create a more
                            complex system.
                        </article>
                        <Github linkTo="https://github.com/sattfatt/exercise-tracker"></Github>

                    </Expandable>
                    <Expandable label={label.Personal} title="Kuba Game" classes="scrollable" _ref={Iota()}>
                        <div>
                            Implements the Kuba game in Python in the CLI. This was one of my portfolio projects for
                            Intro to CS.
                            <Skills unique="kuba-skills" mini skills={{Programming: ["Python"]}}></Skills>
                        </div>
                        <article>
                            This is a 2 player game where the object is to capture 7 neutral marbles or by pushing off
                            all of the oppositions marbles. You can see more info here: <a
                            href="https://sites.google.com/site/boardandpieces/list-of-games/kuba" target="_blank"
                            rel="noopener noreferrer">Kuba Game</a>
                        </article>
                        <Github linkTo="https://github.com/sattfatt/kuba"></Github>
                    </Expandable>
                    <Expandable label={label.Personal} title="Graphs" classes="scrollable" _ref={Iota()}>
                        <div>
                            Implements directed and undirected graphs in python. Each implementation has various
                            traversal methods as well as common algorithms like loop detection and Djikstras algorithm.
                            <Skills unique="graphs-skills" mini skills={{Programming: ["Python"]}}></Skills>
                        </div>
                        <Github linkTo="https://github.com/sattfatt/graph"></Github>
                    </Expandable>
                    <Expandable label={label.Personal} title="Fun AI" classes="scrollable" _ref={Iota()}>
                        <div>
                            A 1v1 game that slowly reaches an optimal state. Each AI agent is controled via a FFNN and
                            weights are updated using a genetic algorithm.
                            <Skills unique="ai-skills" mini skills={{Programming: ["Python"]}}></Skills>
                        </div>

                        <article>This code is pretty old. I did this project mainly to learn how to code in python. Its
                            definitly not the cleanest code I have written but its always nice to see where I started.
                            In fact the code is so old that I dont even remember what dependencies are needed to run it
                            :p
                        </article>

                        <Github linkTo="https://github.com/sattfatt/Simple-AI/blob/master/pygame1/oneonone.py"></Github>
                    </Expandable>
                </div>
            </TextBox>

            <TextBox title="Art">
                <div className="flex-row-boxes">
                    These were modeled, textured, rigged and rendered from scratch using blender. The two characters are
                    my takes on characters from the Cradle book series by Will Wight.
                    <HostedImage linkTo unique="art-5" url="https://i.imgur.com/MUnARAJ.jpg"></HostedImage>
                    <HostedImage linkTo unique="art-0" url="https://i.imgur.com/JXgJDzX.png"></HostedImage>
                    <HostedImage linkTo unique="art-1" url="https://i.imgur.com/zx0n3bc.jpg"></HostedImage>
                    <HostedImage linkTo unique="art-2" url="https://i.imgur.com/gIdj7T2.png"></HostedImage>
                    <HostedImage linkTo unique="art-3" url="https://i.imgur.com/ntcJUoG.png"></HostedImage>
                    <HostedImage caption="This one has some assets not made by me" linkTo unique="art-4"
                                 url="https://i.imgur.com/mfmX3KK.png"></HostedImage>
                </div>
            </TextBox>
        </div>
    );
}

export default InfoBoxes;