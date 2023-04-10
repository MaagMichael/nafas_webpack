import React from "react";
import CardFilter from "./CardFilter";
import Button from "./Button";

import "./Menu.css";


export default function Menu() {
  
  return (
    <div className="menu_body">
      {/* category filter along Dips, Salate, Teigwaren, Extra, Dessert */}
      {/* package filter along Aladin, 1001 Nacht, Sahara */}
      
      <p>Aladin (für 10 Personen)</p>
      <CardFilter package="Aladin" category=""/>
      <Button />

      <p>Aladin (für 10 Personen)</p>
      <p>Dips</p>
      <CardFilter package="Aladin" category="Dips"/>
      <p>Salate</p>
      <CardFilter package="Aladin" category="Salate"/>
      <p>Salate</p>
      <CardFilter package="Aladin" category="Teigwaren"/>
      <p>Extra</p>
      <CardFilter package="Aladin" category="Extra"/>
      <p>Dessert (für 10 Personen mit Preisaufschlag)</p>
      <CardFilter package="Optional" category="Dessert"/>
      <Button />
    </div>
  );
}
