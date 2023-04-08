import React from "react";
import { Link } from "react-router-dom";

import "./NavigationBar.css";
import Button from "./Button";

const NavigationBar = () => {
  return (
    <nav>
      <img src="../images/Logo_Nafas.jpg" alt="Logo Nafas" width="100" />

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/packages">Pakete</Link>
        <Link to="/contact">Kontakt</Link>

        {/* <h3>
          <Link to="/">Home</Link>
        </h3>
        <h3>
          <Link to="/menu">Menu</Link>
        </h3>
        <h3>
          <Link to="/packages">Pakete</Link>
        </h3>
        <h3>
          <Link to="/contact">Kontakt</Link>
        </h3> */}
      </div>

      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/packages">Pakete</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul> */}

      <div className="request">
      {/* https://mailtolinkgenerator.com/ */}
      <a href="mailto:nafas.muenchen@hotmail.com?subject=Anfrage%20an%20Nafas%20Catering&body=Bitte%20die%20Angaben%20ausf%C3%BCllen%20und%20an%20uns%20schicken.%0A%0ADatum%20der%20Veranstaltung%3A%0AUhrzeit%20Veranstaltungsbeginn%3A%0AUhrzeit%20Veranstaltungsende%3A%0AAnzahl%20der%20G%C3%A4ste%3A%0AAnlass%3A%0A%0AEssen%20Pakete%20mit%20Anzahl%3A%0A-%20Paket%20Alladin%3A%20%20%20Stk%0A-%20Paket%20Sahara%3A%20%20%20Stk%0A-%20Paket%201001%20Nacht%3A%20%20%20Stk%0AGetr%C3%A4nke%3A%0APersonal%3A%0ABudget%3A%0ABarrierefreier%20Zugang%3A%0AStellfl%C3%A4che%20f%C3%BCr%20Buffet%3A%0ALieferadresse%3A%0ARechnungsadresse%3A%0ATelefonnummer%3A%0AWeitere%20Infos%3A">
        Anfrage
      </a>
      </div>
    </nav>
  );
};

export default NavigationBar;
