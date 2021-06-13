import React from 'react';

//imports
import GameHeader from '../GameStuff/GameHeader'

export default function GamePage(props) {
    return (

        <div className="All-content">
            <GameHeader />
            <div className="Game-content">
                <div className="Game-cards">
                    <h3>Title</h3>
                    <div className="Game-card-description">
                        <p>Image holder</p>
                        <p>Short description of project</p>
                    </div>
                    <div className="Game-card-links">
                        <p>Link to aditional info</p>
                        <p>Link to project</p>
                    </div>
                </div>
                <div className="Game-cards">
                    <h3>Title 2</h3>
                    <div className="Game-card-description">
                        <p>Image holder</p>
                        <p>Short description of project</p>
                    </div>
                    <div className="Game-card-links">
                        <p>Link to aditional info</p>
                        <p>Link to project</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
