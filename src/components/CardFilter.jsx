import React from "react";
import { useState } from 'react';

import CardModal from "./CardModal";
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
  const [idDetail, setIdDetail] = useState([]);

  // const infoDetail = (key) => {alert("You clicked dish ID " + key); };
  
  // get id of picked dish and toggle UseState of modal show/no-show
  // const ModalDetails = (id, url, name, pack, category) => {
  const ModalDetails = (dishInfo) => {
    toggle();
    console.log(dishInfo);
    // setIdDetail(id, url);
    setIdDetail(dishInfo.id, dishInfo.name);
    // console.log("details ",idDetail, url, name, pack, category);
    console.log("details ",idDetail);
  }

  
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
                // take object by id(key) of picked dish and send to modal component
                onClick={() => ModalDetails(dish)}
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

      <CardModal isShowing={isShowing} hide={toggle} id={idDetail} />  
    </div>
  );
};

export default CardFilter;
