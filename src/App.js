import React, { Component } from "react";

import {
  BrowserRouter as Router,
 Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './Home';

export class App extends Component {
render() {
    return (
      <><Router>
        <div>
      <Navbar/>
      <Home/>
      <Routes>
        <Route path="/about"></Route>    
        <Route path="/users"></Route>
      </Routes>
      </div>
      </Router>
    </>
    )
  }
}

export default App;

