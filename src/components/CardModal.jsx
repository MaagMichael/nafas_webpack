// https://upmostly.com/tutorials/modal-components-react-custom-hooks

import React from "react";
import ReactDOM from "react-dom";

import "./CardModal.css";

// Portals allow React components to render in another part of the DOM that
//  is outside of their parent component.
// Therefore, we can use a Portal to mount our Modal component to the end of the
// document.body element, rather than as a child of another component.
// To do this in the code above, we specify two arguments to the createPortal
//  function: the modal component we want to render and the location of
// where we want to append the component.

const CardModal = ({ isShowing, hide, dishInfo }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              
              <div className="modal-header">
                {/* close button */}
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  // by click close then open modal
                  onClick={hide}
                >
                  <span aria-hidden="true">close</span>
                  {/* &times; */}
                </button>
              </div>

              <p>
                Name Gericht: {dishInfo.name}. (ID {dishInfo.id})
              </p>
              <img src={dishInfo.URL} className="modal_image" alt="dish" />
              <p>Kategorie {dishInfo.category}.</p>
              <p>
                Die Zutaten sind:
                {dishInfo.ingredients &&
                  dishInfo.ingredients.map((detail) => {
                    return <p>{detail}</p>;
                  })}
              </p>
              <p>
                Enthalten in Paket:
                {dishInfo.package &&
                  dishInfo.package.map((detail) => {
                    return <p>{detail}</p>;
                  })}
              </p>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default CardModal;
