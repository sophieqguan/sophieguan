import React, { useState, useRef, useEffect } from 'react';
import { animations } from 'react-animation'

function Note () {
    // note css styles
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
    const [text, setText] = useState("");
    const [display, setDisplay] = useState("none");
    const [animation, setAnimation] = useState(animations.popIn);

    const ref = useRef(null); // reference to note obj
    // useEffect(() => console.log(top + ", " + left), [display]);

    /** on [display] change, handle mouse clicks
     *  1. if note is showing, click to unshow. If note is hidden, click to show
     *  2. set note location to cursor location
     */
    useEffect(() => {
        const handleMouseClick = (event) => {
            // console.log(event.target);
            let mainPic = document.getElementById("pfp"); // reference to profile pic
            if (ref.current && !ref.current.contains(event.target) && !mainPic.contains(event.target)) {
                if (display === "block") {
                    setDisplay("none");
                }
                else if (display === "none") {
                    setDisplay("block");
                    setAnimation(animations.popOut);
                    setLeft(event.clientX);
                    setTop(event.clientY);
                    setAnimation(animations.popIn);
                }
            }
            // console.log(x+ ", " + y);
            // alert("!!!");
        }
        document.addEventListener('click', handleMouseClick, true);
        return () => {
          document.removeEventListener('click', handleMouseClick, true);
        };
    }, [ display ]);

    function handleTextChange(e) {
        setText(e.target.value);
        // console.log(text);
    }

    return (
        <div>
            <textarea 
                ref={ref} 
                id="space" 
                placeholder="a little memo box for you"
                style={{display, left, top, animation}} 
                onChange={e => handleTextChange(e)}
            ></textarea>
        </div>
        
    )
}

export default Note;