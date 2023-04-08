import React from 'react';
import { Link } from 'react-router-dom';

import "./NavigationBar.css";
import Button from "./Button";

const NavigationBar = () => {
    return (
      <nav>
        <img src="../images/Logo_Nafas.jpg" alt="Logo Nafas" width="100"/>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/packages">Pakete</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
        
        <Button />

      </nav>
      
    );
  }
  
  export default NavigationBar;