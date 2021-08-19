import React from 'react';


//imports
import Header from '../Header'
import Footer from '../Footer'

export default function Homepage() {


    return (
        <div className="All-content">
            <Header />
            <div className="Main-content">
                <h1>Homepage</h1>
                <p>Welcome to my portfolio site, this is where I host all of my personal projects for all to see. 
                    <br />
                    Feel free to send me feedback either by e-mail or by the comments sections under each project.
                </p>
            </div>
            <Footer />
        </div>
    );
}