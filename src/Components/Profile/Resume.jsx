import React from 'react';

//imports
import Header from '../Header'
import Footer from '../Footer'

export default function Resume(props) {
    return (
        <div className="All-content">
            <Header />
            <div className="Main-content">
                <h1>Resume</h1>
                <p>putting up both an on scrren resume</p>
                <p>And one to download</p>
            </div>
            <Footer />
        </div>
    );
}
