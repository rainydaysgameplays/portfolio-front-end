import './App.css';
// import React, { useState } from "react"
import { Route } from 'react-router-dom'

//imports
import Homepage from './Components/Profile/Homepage'


export default function App() {
  return (
    <div className="App">
      <Route path="/" exact render={() => <Homepage />} />
    </div>
  );
}


