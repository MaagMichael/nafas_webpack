import { useState } from 'react';

// We do a few things in this custom Hook:

// Instantiate new isShowing and setIsShowing state values to store the current view state of the modal.
// Declare a function toggle that changes the value of isShowing to be the opposite of what it is currently.
// Return the value of isShowing and the toggle function from the Hook, so the component has access to them.

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

export default useModal;
