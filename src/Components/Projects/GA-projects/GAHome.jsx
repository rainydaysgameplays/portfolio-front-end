import React from 'react';

// imports
import GAHeader from "./GAHeader.jsx"

export default function GAHome(props) {
    return (
        <div className="GA-Page">
            <GAHeader Title={"About my GA experiance"}/>

            <div className="GA-Page-Content">

                <h4 className="GA-intro">What is General Assembly</h4>

                <p>
                    General Assembley is an intensive progamming bootcamp that helps develop real world prgramming skills.
                    <br />
                    Throught the training you develop connections with other programmers and learn how to program in a fast paced envirment.
                    <br />
                    I started attending GA late 2020 and graduated at the beginign of March 2021.
                    
                </p>

                <h4>Why I attended GA</h4>

                <p>
                    After I graduated highschool I started to attend The University of Texas in Tyler. 
                    <br />
                    At the time I was studdieng electrical eengineering and after 2 years I decided that it wasn't what I wanted to do with my life.
                    <br />
                    As I had run low on my savings I decided to take a break and earn some money at my local groccery store.
                    <br />
                    While I worked I took time to contemplate what it was I wanted to do professionally.
                    <br />
                    Luckily, during my studdies at college I attended a programming lecture that left a lasting impression.
                    <br />
                    So after 2 years of work, I started attending GA as an alternitive to the traditional college route.

                </p>
                
                <h4>What I learned at GA</h4>

                <p>
                    General Assembly tought me many things, more than just programming basics or how to propperly code. 
                    <br />
                    They tought me how to teach myself code and how to further develop my programming skills.
                    <br />
                    They tought me how to work in a fast paced setting and to not be afraid to ask for help before you make mistakes.
                    <br />
                    It was a truly amazing experiance that has changed my life for the better.
                    <br />
                    So while the main tech stacks that we learned was the MERN stack along with some Pythong and Django at the end.
                    <br />
                    I can confidantly say that I will be able to learn whatever is neccessary for my future growth as a programmer.


                </p>

            </div>
        </div>
    );
}
