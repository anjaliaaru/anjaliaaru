

import './App.css';

import NavBar from './components/Navbar';
import About from './components/About';

import { BrowserRouter as
   Router, Route, Routes, } from 'react-router-dom';
import Home from './components/context/notes/Home';
import NoteState from './components/context/notes/NoteState';

function App() {
  return (
    <>
    <NoteState>
      
        <Router>
          <NavBar />
          
          <div className="container"> 
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
        </NoteState>
    </>
  )
}

export default App;