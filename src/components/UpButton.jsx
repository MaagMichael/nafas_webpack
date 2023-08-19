import React from "react";
import {useState, useEffect} from "react";
import { BsArrowUpShort } from "react-icons/bs"

import "./UpButton.css";

export default function UpButton() {
  // The back-to-top button is hidden at the beginning
  const [showUpButton, setShowUpButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowUpButton(true);
      } else {
        setShowUpButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {showUpButton && (
        <button onClick={scrollToTop} className="back-to-top">
          {/* up button of react icons*/}
          <BsArrowUpShort/>
        </button>
      )}
    </>
  );
}
