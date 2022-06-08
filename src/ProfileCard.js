import React from 'react';

function Display () {

    const llamaText = ["in my spare time i like to write.", "i also like noodle soup.", "Chair of UCSB Archery Division"];
    const llamaTextLoad = llamaText.map( (text, index) => 
        <li key={'L' + index}>{text}</li>
    );

    const humanText = ["Computer Engineering at UC Santa Barbara", "SWE Intern at Salesforce (SUMMER 22)"];
    const humanTextLoad = humanText.map( (text, index) => 
        <li key={'H' + index}>{text}</li>
    );

    return (
        <div className = "container center">
            <div className="row center">
                <p id="name1" > Sophie Guan </p>
            </div>
            <div className="row center">
                <div className="card" id="card">
                    <div className="card-body">
                        <div className="col">
                            <ul className="left-align" id="text1">{humanTextLoad}</ul>
                            <ul className="left-align" id="text2" style={{"display": 'none'}}>{llamaTextLoad}</ul>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="row center" id="icons">
                <div className="col"></div>
                <div className="col">
                    <a href="https://github.com/sophieqguan" target="_blank" rel="noopener noreferrer"><img id="logo" src={require("./images/gitlight.png")} alt="github"/></a>
                    <a href="documents/Resume.pdf"><img id="logo" src={require("./images/document.png")} alt="resume"/></a>
                    <a href="https://www.linkedin.com/in/sophieguan03/" target="_blank" rel="noopener noreferrer"><img id="logo" src={require("./images/lin.png")} alt="linkedin"/></a>
                    
                </div> 
                <div className="col"></div>
            </div>
        </div>
    )
}


export default Display;