import React, { useState } from 'react';
import { animations } from 'react-animation'

function Display () {

  const [click, setClick] = useState(0); // count number of clicks
  const [random, setRandom] = useState(2); // random number that clicks should match to change picture
  const [curPic, setPic] = useState("human"); // current picture ('llama' or 'human') [maybe it's an alpaca idk]

  // random number generator
  function randomNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // change picture and text display from human to llama or llama to human
  function switchLook() {

    let pfp = document.getElementById("pfp"); // picture reference
    let card = document.getElementById("card"); // about me card reference
    let aboutMe1 = document.getElementById("text1"); // about me text, side human reference
    let aboutMe2 = document.getElementById("text2"); // about me text, side llama reference
    
      if (curPic === "human") { // human to llama
          card.classList.add("card-hover");
          aboutMe1.style.display = "none";
          aboutMe2.style.display = "block";

          pfp.src = require("./images/llamaFull.png");
          pfp.classList.remove("round");
          setPic("llama");
      }
      else if (curPic === "llama") { // llama to human
          card.classList.add("card");
          card.classList.remove("card-hover");
          aboutMe1.style.display = "block";
          aboutMe2.style.display = "none";

          pfp.src = require("./images/profilePicture.jpg");
          pfp.classList.add("round");
          setPic("human");
      }
      
      pfp.style.animation = animations.bounceIn;
  }

  return (
    <div className="container">
      <div className="row center">
          <img src={require("./images/profilePicture.jpg")} 
                style={{animation: animations.bounceIn}}
                className="card-img-top round noselect" 
                id="pfp" 
                alt="picture of big face" 
                onClick = {e => {
                  setClick(click + 1);
                  if (random === 0) setRandom(randomNum(2, 10));

                  if (click !== 0 && click % 50 === 0) {
                    alert("You've been here for a while... Maybe it's time to let go...")
                  }

                  if (click % random === 0) {
                    e.currentTarget.style.animation = animations.bounceOut;
                    setTimeout(function () {
                      switchLook();
                    }, 1000);
                    
                    setRandom(randomNum(2, 10));
                }}}
          />
      </div>
      <p className="red-highlight" id="counter"> {click} </p>
      <img id="duck" src={require("./images/duck.png")} alt="duck"></img> 
      <p className="gray-highlight" id="random"> {random} </p>
    </div>
   )
}

export default Display;