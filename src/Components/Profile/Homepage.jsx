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
                <p>State what this project is</p>
            </div>
            <Footer />
        </div>
    );
}