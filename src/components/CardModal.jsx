// https://upmostly.com/tutorials/modal-components-react-custom-hooks

import React from "react";
import ReactDOM from "react-dom";
import { BsXLg } from "react-icons/bs";

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
                  <span aria-hidden="true">
                    <BsXLg />
                  </span>
                </button>
              </div>

              <div className="modal_title_picture">
                <p>
                  Gericht: (ID {dishInfo.id}) {dishInfo.name} (
                  {dishInfo.category})
                </p>
                <img src={dishInfo.URL} className="modal_image" alt="dish" />
              </div>
              <div className="modal_description">
                <p>
                  Enthalten in Paket:
                  <ul>
                    {dishInfo.package &&
                      dishInfo.package.map((detail) => {
                        return <li>{detail}</li>;
                      })}
                  </ul>
                </p>
                <p>
                  Die Zutaten sind:
                  <ul>
                    {dishInfo.ingredients &&
                      dishInfo.ingredients.map((detail) => {
                        return <li>{detail}</li>;
                      })}
                  </ul>
                </p>
              </div>
              
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default CardModal;
