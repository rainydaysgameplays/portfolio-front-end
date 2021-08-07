import React from 'react';
import { Link } from 'react-router-dom'


export default function GAHeader({ Title }) {
    
    return (
        <div className="GaHeadingContainer">
            <h1 className="GaTitle" >{Title}</h1>
            <div className="GaHeadingLinks">
                <Link to={'/webapps'} >back</Link>
                <Link to={'/gahome'} >About GA</Link>
                <Link to={'/gahome/simoninfo'} >Simon game</Link>
                <Link to={'/gahome/dndinfo'} >Dnd resources</Link>
                <Link to={'/gahome/impromtuinfo'} >Impormptu</Link>
                <Link to={'/gahome/thescrollinfo'} >The scroll</Link>
            </div>
        </div>
    );
}

