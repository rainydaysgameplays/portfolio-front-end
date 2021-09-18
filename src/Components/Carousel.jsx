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
            <div id="Carousel-left">
                {/* onclick function to set state -1 and to loop through */}
                <p>{"<<"}</p>
            </div>

            <img className="Simon-Page-img" src={pictures[picState]} alt="project pictures" />
            
            <div id="Carousel-right">
                <p>{">>"}</p>
            </div>

        </div>
        
    );
}

