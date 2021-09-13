import React from 'react';

//imports
import GameHeader from '../GameHeader';

export default function GameTestInfo(props) {
    return (
        <div>
            <GameHeader gameTitle={"Game test info"} linkTo={"gamepage"}/>
            <div>
                <p>Game info goes here</p>
            </div>
        </div>
    );
}

