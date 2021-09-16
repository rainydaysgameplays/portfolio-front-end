import React from 'react';
import { useState } from 'react';

export default function Carousel({ pictures }) {

    
    
    console.log(pictures)
    return (
        <div id="Carousel-container">
            <div id="Carousel-left">
                {/* causes the carousel to move to the left */}
                <p>left</p>
            </div>

            <img className="Simon-Page-img" src={pictures[1]} alt="project pictures" />
            
            <div id="Carousel-right">
                <p>right</p>
            </div>
        </div>
    );
}

