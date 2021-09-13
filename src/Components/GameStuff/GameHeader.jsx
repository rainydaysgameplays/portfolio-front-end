import React from 'react';
import { Link } from 'react-router-dom'

export default function GameHeader({ gameTitle, linkTo }) {
    return (
        <div className="Game-header" >
            {/* takes the title of the game page ex is Unity projects or name of game */}
            <h1>{gameTitle}</h1>
            {/* links to the previouse page */}
            <Link to={`/${linkTo}`} className="Game-heading-link">Back to projects</Link>
        </div>
    );
}

