import React from "react";

import "./Menu.css";
// read in database
import Dishes from "../data.json";

export default function Menu() {

  const infoDetail = (key) => {
    alert("You clicked dish ID " + key);
  };

  return (
    <div className="card_section">
      {Dishes &&
        Dishes.map((dish) => {
          return (
            <div key={dish.id} className="card_container" onClick={() => infoDetail(dish.id)}>
              
              <img src={dish.URL} className="image" alt="dish" />
              <div class="overlay">
                {dish.name} <br />( {dish.category} )
              </div>
            </div>
          );
        })}
    </div>
  );
}
