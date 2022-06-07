import React, { useState } from 'react';
import { animations } from 'react-animation'

function Display () {

  const [click, setClick] = useState(0);
  const [random, setRandom] = useState(2);
  const [curPic, setPic] = useState("human");

  function randomNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function switchLook(look) {
      if (look === 0) { // pfp to llama
          document.getElementById("card").classList.add("card-hover");
          
          document.getElementById("text1").style.display = "none";
          document.getElementById("text2").style.display = "block";
      }
      else if (look === 1) { // llama to pfp
          document.getElementById("card").classList.add("card");
          document.getElementById("card").classList.remove("card-hover");

          document.getElementById("text1").style.display = "block";
          document.getElementById("text2").style.display = "none";
      }
      
  }

  return (
    <div className="container">
      <div className="row center">
          <img src={require("./images/profilePicture.jpg")} 
                style={{animation: animations.bounceIn}}
                className="card-img-top round noselect" 
                id="pfp" 
                alt="..." 
                onClick = {e => {
                  setClick(click + 1);
                  if (random === 0) setRandom(randomNum(2, 10));
                  if (click !== 0 && click % 50 === 0) {
                    alert("You've been here for a while... Maybe it's time to let go...")
                  }
                  if (click % random === 0) {
                    e.currentTarget.style.animation = animations.bounceOut;
                    setTimeout(function () {
                      let cur = document.getElementById("pfp");
                      if (curPic === "human") {
                        switchLook(0);
                        cur.src = require("./images/llamaFull.png");
                        cur.classList.remove("round");
                        setPic("llama");
                      }
                      else if (curPic === "llama") {
                        switchLook(1);
                        cur.src = require("./images/profilePicture.jpg");
                        cur.classList.add("round");
                        setPic("human");
                      }
                      cur.style.animation = animations.bounceIn;
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