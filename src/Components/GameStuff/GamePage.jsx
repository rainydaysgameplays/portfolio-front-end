import React from 'react';

//imports
import GameHeader from '../GameStuff/GameHeader'

export default function GamePage(props) {
    return (

        <div className="All-content">
            <GameHeader />
            <div className="Game-content">
                <p>Game cards go here</p>
            </div>
        </div>
    );
}
