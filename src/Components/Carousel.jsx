import React from 'react';
import { useState } from 'react';

export default function Carousel({ pictures }) {

    // declaring state for pictures
    const [picState, setPicState] = useState(0)
    
    console.log(pictures)

    function leftClick(){
        if(picState === 0){
            setPicState(pictures.length -1)
        }
        else(setPicState(picState-1))
    }

    function rightClick(){
        if(picState === pictures.length -1){
            setPicState(0)
        }
        else(setPicState(picState+1))
    }


    return (
        <div id="Carousel-container">
            <div id="Carousel-left" onClick={leftClick}>
                
                <p>{"<<"}</p>
            </div>

            <div>
                <img id="Carousel-picture" src={pictures[picState]} alt="project pictures" />
            </div>
            
            <div id="Carousel-right" onClick={rightClick}>
                <p>{">>"}</p>
            </div>

        </div>
        
    );
}

