import React from 'react';

//imports
import GameHeader from '../GameStuff/GameHeader'
import { Link } from "react-router-dom"

export default function GamePage(props) {
    return (

        <div className="All-content">

            {/* passes in the title and link to the heading component */}
            <GameHeader gameTitle={"Unity Projects"} linkTo={"projects"}/>

            <div className="Game-content">

                {/* game number 1 */}
                <div className="Game-cards">

                    {/* game title */}
                    <h3>Title</h3>

                    {/* game description */}
                    <div className="Game-card-description">
                        <p>Game one Image</p>
                        <p>Short description of game</p>
                    </div>

                    {/* links to main parts of game */}
                    <div className="Game-card-links">
                        {/* link to info page */}
                        <Link to="/gametestinfo" className="gameCardLinks">game test info</Link>
                        {/* link to game page */}
                        <Link to="/gametest" className="gameCardLinks">game test</Link>
                    </div>
                </div>


                {/* game number 2 */}
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

                {/* repeat as needed */}
            </div>
        </div>
    );
}
