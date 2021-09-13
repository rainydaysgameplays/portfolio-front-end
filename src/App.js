import './App.css';
// import React, { useState } from "react"
import { Route } from 'react-router-dom'

//imports
import Homepage from './Components/Profile/Homepage.jsx'
import AboutMe from './Components/Profile/AboutMe.jsx'
import Resume from './Components/Profile/Resume.jsx'
import Contact from './Components/Profile/Contact.jsx'
import Projects from './Components/Projects/Projecst.jsx'
import GamePage from './Components/GameStuff/GamePage.jsx'

import WebApps from './Components/Projects/WebApps.jsx';

import GameTest from './Components/GameStuff/GameTest/GameTest.jsx'
import GameTestInfo from './Components/GameStuff/GameTest/GameTestInfo.jsx';

import GAHome from './Components/Projects/GA-projects/GAHome.jsx';
import SimonInfo from './Components/Projects/GA-projects/SimonInfo.jsx'
import DnDInfo from './Components/Projects/GA-projects/DnDInfo.jsx'
import ImPromptuInfo from './Components/Projects/GA-projects/ImPromptuInfo.jsx';
import TheScrollInfo from './Components/Projects/GA-projects/TheScrollInfo.jsx';


export default function App() {
  return (
    <div className="App">
      <Route path="/" exact render={() => <Homepage />} />
      <Route path="/about" exact render={() => <AboutMe />} />
      <Route path="/resume" exact render={() => <Resume />} />
      <Route path="/contact" exact render={() => <Contact />} />
      <Route path="/projects" exact render={() => <Projects />} />

      <Route path="/gamepage" exact render={() => <GamePage />} />
      <Route path="/gametest" exact render={() => <GameTest />} />
      <Route path="/gametestinfo" exact render={() => <GameTestInfo />} />

      <Route path="/webapps" exact render={() => <WebApps />} />
      

      <Route path="/gahome" exact render={() => <GAHome /> } />
      <Route path="/gahome/simoninfo" exact render={() => <SimonInfo /> } />
      <Route path="/gahome/dndinfo" exact render={() => <DnDInfo /> } />
      <Route path="/gahome/impromtuinfo" exact render={() => <ImPromptuInfo /> } />
      <Route path="/gahome/thescrollinfo" exact render={() => <TheScrollInfo /> } />


    </div>
  );
}


