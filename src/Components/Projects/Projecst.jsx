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
                <p>Projects</p>

                <div className="Card-container">
                    <div className="Project-cards">
                        <p>Front end</p>
                    </div>
                    <div className="Project-cards">
                        <p>Full stack</p>
                    </div>
                    <div className="Project-cards">
                        <p>Unity projects</p>
                        <Link to={'/gamepage'} className="Content-links">Unity</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
