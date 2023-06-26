import React, { Component } from "react";

import {
  BrowserRouter as Router,
 Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './Home';
import NewsState from './contaxt/notes/NoteState';

export class App extends Component {
render() {
    return (
      <>
      <NoteState>
      <Router>
       
      <Navbar/>
      <Home/>
      <Routes>
        <Route path="/about"></Route>    
        <Route path="/users"></Route>
      </Routes>
     
      </Router>
      </NoteState>
    </>
    )
  }
}

export default App;

