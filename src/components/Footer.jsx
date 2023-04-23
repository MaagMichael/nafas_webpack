import React from "react";
import { BsInstagram } from "react-icons/bs"
import "./Footer.css";

const NavigationBar = () => {
  return (
    <footer>
      {/* del logo, add instagram linl and icon Font Awesome, installing npm i react-icons, media screen */}
      <div className="address">
        <a className="insta" target="blank" href="https://www.instagram.com/nafas.muenchen/?igshid=YmMyMTA2M2Y%3D"><  BsInstagram fontSize="50" /></a>
        <p> IMPRESSUM</p>
        <p>2023 Copyrights reserved by ReDI School</p>
      </div>
    </footer>
  );
};

export default NavigationBar;
