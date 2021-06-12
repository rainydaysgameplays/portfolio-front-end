import './App.css';
// import React, { useState } from "react"
import { Route } from 'react-router-dom'

//imports
import Homepage from './Components/Profile/Homepage'
import AboutMe from './Components/Profile/AboutMe.jsx'
import Resume from './Components/Profile/Resume.jsx'
import Contact from './Components/Profile/Contact.jsx'
import Projects from './Components/Projects/Projecst.jsx'
import GamePage from './Components/GameStuff/GamePage.jsx'

export default function App() {
  return (
    <div className="App">
      <Route path="/" exact render={() => <Homepage />} />
      <Route path="/about" exact render={() => <AboutMe />} />
      <Route path="/resume" exact render={() => <Resume />} />
      <Route path="/contact" exact render={() => <Contact />} />
      <Route path="/projects" exact render={() => <Projects />} />
      <Route path="/gamepage" exact render={() => <GamePage />} />
    </div>
  );
}


