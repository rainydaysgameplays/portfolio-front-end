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
                <p>About what skills and goals that I have</p>
            </div>
            <Footer />
        </div>
    );
}

