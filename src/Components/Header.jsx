import React from 'react';
import { Link } from 'react-router-dom'

export default function Header(props) {
    return (
        <div id="Heading">
            <div id="Profile-pic">
                <p>profile pic</p>
                <div>
                    <p>Justin Shade</p>
                    <p>Fullstack engineer</p>
                </div>
            </div>
            <div id="Heading-links">
                <Link to={'/'} className="HeadingLinks" >Homepage</Link>
                <Link to={'/about'} className="HeadingLinks" >About Me</Link>
                <Link to={'/resume'} className="HeadingLinks" >Resume</Link>
                <Link to={'/contact'} className="HeadingLinks" >Contact Info</Link>
                <Link to={'/projects'} className="HeadingLinks" >Projects</Link>
            </div>
        </div>
    );
}



