import React from 'react';
import { Link } from 'react-router-dom'

//imports
import Header from '../Header';
import Footer from '../Footer';

export default function WebApps(props) {
    return (
        <div  className="All-content">
            <Header />
            <div className="App-content">
                <h1>Web Aplications</h1>

                <div className="Card-container">

                    <div className="App-cards">
                        <h3>General Assembly projects</h3>

                        <div className="App-card-description">
                            <p>Image holder</p>
                            <p>
                                The projects listed on this page go into more detail about 
                                the code and reasons behind the projects that I made while attending general assembly.
                            </p>
                        </div>
                        <div className="App-card-links">
                            <Link to={'gahome'} >Link to project</Link> 
                        </div>
                    </div>



{/* --------------------------------------------------------------- */}
                        {/* repeat as needed Template */}
                    {/* <div className="App-cards">
                        <h3>Title 2</h3>
                        
                        <div className="App-card-description">
                            <p>Image holder</p>
                            <p>Short description of project</p>
                        </div>
                        <div className="App-card-links">
                            <p>Link to aditional info</p>
                            <p>Link to project</p>
                        </div>
                    </div> */}


                </div>

            </div>
            <Footer />
        </div>
    );
}

