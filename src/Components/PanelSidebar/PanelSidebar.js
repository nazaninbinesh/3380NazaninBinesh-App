import React from "react";
import "./panelSidebar.scss";
import {Link} from 'react-router-dom';
import Signout from '../Signout/Signout';

function PanelSidebar(props) {
  return (
    <div className="panelSidebar d-flex flex-column p-3 text-white bg-dark">
        <div
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >        
        <span className="fs-4">
           <img
            src="/s-logo.png"
            alt="Nach"
            width="80"
            height="auto"
            className="d-inline-block align-text-top"
          /> 
        </span>
      </div>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="/avatar.png"
            alt="username"
            width="32"
            height="33"
            className="rounded-circle me-2"
          />          
          <strong>{props.userName}</strong>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser"
        >          
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link to='Signout' className="dropdown-item" href="#">
              Sign out
            </Link>
          </li>
        </ul>
      </div>
     <hr />
      
      <ul className="nav nav-pills flex-column mb-auto">   
      <li>
          <Link to='/panel/addProduct' className="nav-link text-white">            
            add product
          </Link>
        </li>             
        <li>
          <Link to='/panel/products' className="nav-link text-white">            
            Products
          </Link>
        </li>
       
      </ul>
      <hr />
    </div>
  );
}

export default PanelSidebar;
