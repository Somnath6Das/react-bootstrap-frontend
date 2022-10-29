import React from "react";
import Pic from "../assets/bar-chart.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import fa then icon name for using FontAwesome icons. 
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={Pic} alt="logo..." /> 
        </a><h5 style={{color: "#fff"}}>Make My App</h5> 
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        
     <FontAwesomeIcon icon={faBars} style={{color: "#fff"}} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                about me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                how work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
