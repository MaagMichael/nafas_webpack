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
              {/* images from URL */}
              <img src={dish.URL} className="card_image" alt="dish" />
              {/* text on overlay banner */}
              <div class="card_overlay">
                {dish.name} <br />( {dish.category} )
              </div>

            </div>
          );
        })}
    </div>
  );
}
