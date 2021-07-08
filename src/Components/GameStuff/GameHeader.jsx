import React from 'react';
import { Link } from 'react-router-dom'

export default function GameHeader({ gameTitle, linkTo }) {
    return (
        <div className="Game-header" >
            <h1>{gameTitle}</h1>
            <Link to={`/${linkTo}`} className="Game-heading-link">Back to projects</Link>
        </div>
    );
}

