import React from 'react';
import { Link } from 'react-router-dom'

export default function GameHeader(props) {
    return (
        <div className="Game-header" >
            <h1>Game Page</h1>
            <Link to={'/projects'} className="Game-heading-link">Back to projects</Link>
        </div>
    );
}

