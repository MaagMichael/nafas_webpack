import React from 'react';
import ReactDOM from 'react-dom';

import "./CardModal.css";

// Portals allow React components to render in another part of the DOM that
//  is outside of their parent component.
// Therefore, we can use a Portal to mount our Modal component to the end of the 
// document.body element, rather than as a child of another component.
// To do this in the code above, we specify two arguments to the createPortal
//  function: the modal component we want to render and the location of 
// where we want to append the component.

const CardModal = ({ isShowing, hide, dishInfo }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">

        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">close</span>
            {/* &times; */}
          </button>
        </div>
        
        <p>
          Hello, I'm the modal from dish number {dishInfo[0]}.
        </p>
        {/* <img src={dish.URL} className="card_image" alt="dish" /> */}
        <img src="images/Logo_Nafas.jpg" className="modal_image" alt="dish" />
        <p>
          The name is {dishInfo[1]}.
        </p>
        <p>
          The URL is {dishInfo[2]}.
        </p>
        <p>
          The ingredients are {dishInfo[3]}.
        </p>
        <p>
          It is the packages {dishInfo[4]}.
        </p>
        <p>
          The category is {dishInfo[5]}.
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;


export default CardModal;
