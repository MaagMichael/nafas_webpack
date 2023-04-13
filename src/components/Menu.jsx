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
      <CardFilter package="Aladin" category="" className="frame" />
      <Button />

      <p>Paket 1001 Nacht (für 10 Personen)</p>
      <CardFilter package="1001 Nacht" category="" className="frame" />
      <Button />

      <p>Paket Sahara (für 10 Personen)</p>
      <CardFilter package="Sahara" category="" className="frame" />
      <Button />
      
      <p>Extra Platten (für 10 Personen mit Preisaufschlag)</p>
      <CardFilter package="Optional" category="Extraplatte" />
      <Button />

      <p>Dessert (für 10 Personen mit Preisaufschlag)</p>
      <CardFilter package="Optional" category="Dessert" />
      <Button />

      <span>
        <p>Bitte beachten:</p>
      </span>
      <p>
        <span>Platzhalter-Menu 2</span>
        Bitte weisen Sie uns auf mögliche Allergien hin. Pakete können wahlweise
        kombiniert und erweitert werden. Platten und Desserts können nicht ohne
        Pakete bestellt werden. Lieferungen innerhalb von München möglich in
        Höhe von 50 €. Kostenlose Abholung möglich in Kirchheim bei München.
      </p>
    </div>
  );
}
