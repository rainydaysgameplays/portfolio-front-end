import React from 'react';

//imports
import Header from '../Header'
import Footer from '../Footer'


export default function AboutMe(props) {
    return (
        <div  className="All-content">
            <Header />
            <div className="Main-content">
                <h1>About me</h1>
                <p>Image of me</p>

                <p>MERN stack, REACT, Python, Django</p>
                <br></br>
                <p>I am a full stack web-developer that has utilized many programming <br></br>
                languages, from Node to Python, while working with others to find <br></br>
                creative solutions to any errors that might occur. As someone who <br></br>
                loves working on algorithms, my passion is to create complex <br></br>
                programs like AI and game development softwares. The difficulties of <br></br>
                these tasks is what makes finding the solutions to bugs all the more <br></br>
                satisfying.</p>

            </div>
            <Footer />
        </div>
    );
}

