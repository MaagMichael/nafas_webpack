import React from "react";
import CardFilter from "./CardFilter";
import Button from "./Button";

import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu_body">
      {/* category filter along Dips, Salate, Teigwaren, Extra, Dessert */}
      {/* package filter along Aladin, 1001 Nacht, Sahara */}

      <p>Paket Aladin (für 10 Personen)</p>
      <CardFilter package="Aladin" category="" />
      <Button />

      <p>Paket Aladin (für 10 Personen)</p>
      <p>Dips</p>
      <CardFilter package="Aladin" category="Dips" />
      <p>Salate</p>
      <CardFilter package="Aladin" category="Salate" />
      <p>Salate</p>
      <CardFilter package="Aladin" category="Teigwaren" />
      <p>Extra</p>
      <CardFilter package="Aladin" category="Extra" />
      <p>Dessert (für 10 Personen mit Preisaufschlag)</p>
      <CardFilter package="Optional" category="Dessert" />
      <Button />

      <span><p>Bitte beachten:</p></span>
      <p><span>Platzhalter-Menu 2</span>
        Bitte weisen Sie uns auf mögliche Allergien hin. Pakete können wahlweise
        kombiniert und erweitert werden. Platten und Desserts können nicht ohne
        Pakete bestellt werden. Lieferungen innerhalb von München möglich in
        Höhe von 50 €. Kostenlose Abholung möglich in Kirchheim bei München.
      </p>
    </div>
  );
}
