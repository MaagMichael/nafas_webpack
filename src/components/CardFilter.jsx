import React from "react";
import { useState } from "react";

import CardModal from "./CardModal";
import useModal from "./useModal";

import "./CardFilter.css";

// read in database
import Dishes from "../data.json";

const CardFilter = (props) => {
  // const package is reserved in strict mode
  // bundle and cluster for filtering cards below
  const bundle = props.package;
  const cluster = props.category;

  // using the custom hook
  const { isShowing, toggle } = useModal();
  const [modalInfo, setModalInfo] = useState({});

  // const infoDetail = (key) => {alert("You clicked dish ID " + key); };

  // get object of picked dish id and toggle UseState of modal show/no-show
  const ModalDetails = (dishInfo) => {
    // console.log(dishInfo);

    toggle();
    // console.log(isShowing);

    // transfer object into useState to display in modal
    setModalInfo(dishInfo);
    console.log(modalInfo);     
  };  

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
                // take object by id(key) of picked dish and send to modal function
                onClick={() => ModalDetails(Dishes[dish.id])}

              >
                {/* images from URL */}
                <img src={dish.URL} className="card_image" alt="dish" />
                {/* text on overlay banner */}
                <div className="card_overlay">
                  {dish.name} <br />( {dish.category} )
                </div>
              </div>
            );
          })}

      {/* send useStates here to modal component and render here */}
      <CardModal isShowing={isShowing} hide={toggle} dishInfo={modalInfo} />
    </div>
  );
};

export default CardFilter;
