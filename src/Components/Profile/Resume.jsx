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
                <p>
                    The following links will open in another tab. Alternitively you can download them if that is your prefered method.
                </p>
          
                <div>
                    <div>
                        <p>View PDF resume</p>
                        <p>Download pdf resume</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
