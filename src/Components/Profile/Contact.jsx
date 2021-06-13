import React from 'react';

//imports
import Header from '../Header'
import Footer from '../Footer'

export default function Contact(props) {
    return (
        <div  className="All-content">
            <Header />
            <div className="Main-content">
                <h1>Conatct</h1>
                <p>phone #</p>
                <p>Email</p>
                <p>LinkedIn</p>
                <p>Github</p>
            </div>
            <Footer />
        </div>
    );
}
