import React from "react";
import { Link } from "react-router-dom";

import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav>
      <img src="../images/Logo_Nafas.jpg" alt="Logo Nafas" width="100" />

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        {/* <Link to="/packages">Pakete</Link> */}
        <Link to="/contact">Kontakt</Link>
      </div>

      <div className="request">
        {/* https://mailtolinkgenerator.com/ */}
        <a href="mailto:nafas.muenchen@hotmail.com?subject=Anfrage%20an%20Nafas%20Catering&body=Bitte%20die%20Angaben%20ausf%C3%BCllen%20und%20an%20uns%20schicken.%0A%0ADatum%20der%20Veranstaltung%3A%0AUhrzeit%20Veranstaltungsbeginn%3A%0AUhrzeit%20Veranstaltungsende%3A%0AAnzahl%20der%20G%C3%A4ste%3A%0AAnlass%3A%0A%0AEssen%20Pakete%20mit%20Anzahl%3A%0A-%20Paket%20Aladin%3A%20%20%20Stk%0A-%20Paket%201001%20Nacht%3A%20%20%20Stk%0A-%20Paket%20Sahara%3A%20%20%20Stk%0AGetr%C3%A4nke%3A%0APersonal%3A%0ABudget%3A%0ABarrierefreier%20Zugang%3A%0AStellfl%C3%A4che%20f%C3%BCr%20Buffet%3A%0ALieferadresse%3A%0ARechnungsadresse%3A%0ATelefonnummer%3A%0AWeitere%20Infos%20(z.B.%20Allergien)%3A">
          Anfrage
        </a>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        fill="currentColor"
      >
        <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
      </svg>
    </nav>
  );
};

export default NavigationBar;
