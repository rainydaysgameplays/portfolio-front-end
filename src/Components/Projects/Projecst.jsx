import React from 'react';
import { Link } from 'react-router-dom'

//imports
import Header from '../Header'
import Footer from '../Footer'


export default function Projecst(props) {
    return (
        <div  className="All-content">
            <Header />
            <div className="Main-content">
                <h1>Projects</h1>

                <div className="Card-container">
                    <div className="Project-cards">
                        <h3>Web aplications</h3>
                        <p>These webb aplications are made using node.js along with React. Some of these projects are full stack while others might only pull from an API</p>
                        <button>select</button>
                    </div>
                    <div className="Project-cards">
                        <h3>Unity projects</h3>
                        <p>Projects that showcase my knowledge of unity while also allowing me to show mu skills with C#</p>
                        <Link to={'/gamepage'} className="Content-links">Unity</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
