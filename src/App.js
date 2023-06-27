import React  from "react";
import NoteState from'./components/context/notes/NoteState';
import Navbar from'./components/Navbar';
import Home from './Home';

import {
  BrowserRouter as Router,
 Routes,
  Route } from "react-router-dom";
function App(){
  
    return (
      <>
      <NoteState>
      <Router>
        <Navbar/>
        <Home/>
        <Routes>
        <Route path="/"></Route>    
        <Route path="/About"></Route>
      </Routes>
     
      </Router>
      </NoteState>
    </>
    )
  }


export default App;

