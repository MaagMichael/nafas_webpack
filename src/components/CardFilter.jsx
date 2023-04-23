import React from "react";

import Modal from "./CardModal";
import useModal from "./useModal";

import "./CardFilter.css";

// read in database
import Dishes from "../data.json";

const CardFilter = (props) => {
  // const package is reserved in strict mode
  const bundle = props.package;
  const cluster = props.category;

  // using the custom hook
  const { isShowing, toggle } = useModal();

  // const infoDetail = (key) => {alert("You clicked dish ID " + key); };
  // const infoDetail = (key) => {alert("You clicked dish ID " + key); };

  return (
    <div className="card_section">
      {Dishes &&
        // https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples

        Dishes.filter((dish) => dish.package.includes(bundle))
          .filter((dish) => dish.category.includes(cluster))
          .map((dish) => {
            return (
              <div
                key={dish.id}
                className="card_container"
                // onClick={() => infoDetail(dish.id)}
                onClick={() => toggle()}
                // onClick={toggle}
              >
                <Modal isShowing={isShowing} hide={toggle} id={dish.id} />

                {/* images from URL */}
                <img src={dish.URL} className="card_image" alt="dish" />
                {/* text on overlay banner */}
                <div className="card_overlay">
                  {dish.name} <br />( {dish.category} )
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default CardFilter;
