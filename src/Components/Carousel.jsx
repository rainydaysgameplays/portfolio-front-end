import React from 'react';

export default function Carousel({ pictures }) {
    
    console.log(pictures[0])
    return (
        <div>
            <img className="Simon-Page-img" src={pictures[0]} alt="project pictures" />
        </div>
    );
}

