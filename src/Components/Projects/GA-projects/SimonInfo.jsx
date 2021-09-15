import React from 'react';

// imports
import GAHeader from './GAHeader.jsx';
import Carousel from '../../Carousel.jsx';

// image imports
import SimonPage from "./GA-projects-pictures/Simon-pictures/Simon-game-page.png"
import SimonCode1 from "./GA-projects-pictures/Simon-pictures/Simon-code1.png"
import SimonCode2 from "./GA-projects-pictures/Simon-pictures/Simon-code2.png"
import SimonCode3 from "./GA-projects-pictures/Simon-pictures/Simon-code3.png"

let images = [SimonPage, SimonCode1, SimonCode2, SimonCode3]

export default function SimonInfo(props) {
    return (
        <div className="GA-Page">
        <GAHeader Title={"Simon Game"}/>
        <div className="GA-Page-Content">
            <p className="GA-intro-paragraph">About my experiances at GA</p>

            <div className="Simon-Page-section" >
                <div className="img-conatainer">
                   <Carousel pictures={images} />
                   
                </div>
                <p>
                    This Simon game was made with only basic html, css, and js files. 
                    <br />
                    The pattern is generated by adding a random number onto an array.
                    <br />
                    The array is compared once the arrays sizes match.
                    <br />
                    If the contents match, another number is added and the game continues while if they are different the game will end.

                </p>
            </div>


        </div>
    </div>
    );
}

