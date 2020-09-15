import React from "react";
import Typist from 'react-typist';
import "./Header.css";

const header = (props) => (
    <div className="toolBar">
        <header>
            <Typist
                className="text"
                avgTypingDelay={40}
                stdTypingDelay={30}
                startDelay={400}
                cursor={{ hideWhenDone: true }}

            >
                <span>hi.</span>
                <Typist.Delay ms={400} />
                <span> my name's </span>
                <span className="name">ethan</span>
                <Typist.Delay ms={400} />
                <span>, and this is some of my writing.</span>                
            </Typist>
        </header>
    </div>
);
export default header;