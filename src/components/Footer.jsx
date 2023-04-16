import React from "react";

import "./Footer.css";

const NavigationBar = () => {
  return (
    <footer>
      {/* <img src="../images/Logo_Nafas.jpg" alt="Logo Nafas" width="50" /> */}

      <div className="address">
        <p>Rosenheimerstr. 139 in 81671 München</p>
        <p>email: info@nafas.de</p>
        <p>Tel: 123456789</p>
      </div>

      <div className="social_media"></div>
    </footer>
  );
};

export default NavigationBar;
