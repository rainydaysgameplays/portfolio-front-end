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

import WebApps from './Components/Projects/WebApps';

import GameTest from './Components/GameStuff/GameTest/GameTest.jsx'
import GameTestInfo from './Components/GameStuff/GameTest/GameTestInfo';

export default function App() {
  return (
    <div className="App">
      <Route path="/" exact render={() => <Homepage />} />
      <Route path="/about" exact render={() => <AboutMe />} />
      <Route path="/resume" exact render={() => <Resume />} />
      <Route path="/contact" exact render={() => <Contact />} />
      <Route path="/projects" exact render={() => <Projects />} />
      <Route path="/gamepage" exact render={() => <GamePage />} />


      <Route path="/webapps" exact render={() => <WebApps />} />
      
      <Route path="/gametest" exact render={() => <GameTest />} />
      <Route path="/gametestinfo" exact render={() => <GameTestInfo />} />


    </div>
  );
}


