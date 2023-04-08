import React from 'react';
import { Link } from 'react-router-dom';

import "./NavigationBar.css";

const NavigationBar = () => {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <img src="./nafas_logo.jpg" alt="Logo Nafas" width="100"/>
        <h3>Home</h3>
        <h3>Menu</h3>
        <h3>Pakete</h3>
        <h3>Kontakt</h3>
        <button>Anfrage</button>

      </nav>
      
    );
  }
  
  export default NavigationBar;