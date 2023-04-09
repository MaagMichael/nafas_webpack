import React from "react";
import Button from "./Button";

import "./Menu.css";
// read in database
import Dishes from "../data.json";

export default function Menu() {
  const infoDetail = (key) => {
    alert("You clicked dish ID " + key);
  };

  return (
    <div className="menu_body">

      <div className="card_section">
        {Dishes &&
          // https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
          // category filter along Dips, Salate, Teigwaren, Extra, Dessert
          // package filter along Aladin, 1001 Nacht, Sahara
          Dishes.filter((dish) => dish.package.includes("Aladin")).map(
            (dish) => {
              return (
                <div
                  key={dish.id}
                  className="card_container"
                  onClick={() => infoDetail(dish.id)}
                >
                  {/* images from URL */}
                  <img src={process.env.PUBLIC_URL + dish.URL} className="card_image" alt="dish" />
                  {/* text on overlay banner */}
                  <div class="card_overlay">
                    {dish.name} <br />( {dish.category} )
                  </div>
                </div>
              );
            }
          )}
      </div>

      <Button/>
    </div>
  );
}
