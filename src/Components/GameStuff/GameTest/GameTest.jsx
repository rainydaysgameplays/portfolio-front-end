import React from 'react';

//imports
import GameHeader from "../GameHeader";

export default function GameTest(props) {
    return (
        <div>
            <GameHeader gameTitle={"Game Test Display"} linkTo={"gamepage"}/>
            <div>
                <p>Game goes here</p>
            </div>
        </div>
    );
}
