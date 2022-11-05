import React from 'react';
import logo from './logo.jpg'
import portfolio from './portfolio.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (    
   <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className='container'>
    <a className="navbar-brand" href="/"><img className='logo' src={portfolio} alt='logo...' /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color:"#fff"}} />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/about me">About me</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/services">Services</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/howwork">How Work</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/portfolio">Portfolio</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/contact">Contacts</a>
        </li>
      </ul>
    
    </div>

  </div>
</nav>
            
    
    );
};

export default Navbar;