import React from 'react';

function Display () {

    return (
        <div className = "container center">
            <div className="row center">
                <p id="name1" > Sophie Guan </p>
            </div>
            <div className="row center">
                <div className="card" id="card">
                    <div className="card-body">
                        <p id="text1" > 
                            Computer Engineering at UC Santa Barbara <br/>
                            SWE Intern at Salesforce (SUMMER 22)
                        </p>
                        <p id="text2" style={{"display": 'none'}}> 
                            in my spare time i like to write.
                            <br/>
                            i also like noodle soup.
                        </p>
                    </div>
                </div> 
            </div>
            <div className="row center" id="icons">
                <div className="col"></div>
                <div className="col">
                    <a href="https://github.com/sophieqguan" target="_blank" rel="noopener noreferrer"><img id="logo" src={require("./images/gitlight.png")} alt="github"/></a>
                    <a href="./documents/Resume.pdf" target="_blank" rel="noopener noreferrer"><img id="logo" src={require("./images/document.png")} alt="resume"/></a>
                    <a href="https://www.linkedin.com/in/sophieguan03/" target="_blank" rel="noopener noreferrer"><img id="logo" src={require("./images/lin.png")} alt="linkedin"/></a>
                    
                </div> 
                <div className="col"></div>
            </div>
        </div>
    )
}


export default Display;