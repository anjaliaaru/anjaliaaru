import React from 'react'
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
        <nav className={`"navbar navbar-expand-lg bg-secondary  navbar-${props.mode} bg-${props.mode}"`}>
  <div className="container-fluid"> 
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <link className="navbar-brand" to="/">{props.title}</link>
    
        <li className="nav-item">
          <link className="nav-link active" aria-current="page" to="/">Home</link>
        </li>
        <li className="nav-item">
          <link className="nav-link" to="">About</link>
        </li>
      
      </ul>
      
      <div className={`form-check form-switch  text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor ="flexSwitchCheckDefault">Enable dark mode</label>
</div>

      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
        
Navbar.propTypes={
  title: PropTypes.string,
  aboutText:PropTypes.string
}
Navbar.defaultProps={
  title:'set title here',
  aboutText: 'about text here',
};