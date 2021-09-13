import React from 'react';

//imports
import Header from '../Header'
import Footer from '../Footer'

export default function Contact(props) {
    return (
        <div  className="All-content">
            <Header />
            <div className="Main-content">
                <h1>Conatct Info</h1>
                <p>Email: rainydaysgameplays@gmail.com</p>
                <p>phone #: 210-870-8409</p>

                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/justin-a-shade/">LinkedIn</a>
                <a rel="noreferrer" target="_blank" href="https://github.com/justinallenshade">GitHub</a>
            
            </div>
            <Footer />
        </div>
    );
}
