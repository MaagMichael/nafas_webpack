import React from "react";

import "./Main.css";
import Button from "./Button";

// import images for background images
import picture1 from "../images/picture1.png";
import picture2 from "../images/picture2.png";
import picture3 from "../images/picture3.png";

export default function Main() {
  return (
    <main>
      <section>
        {/* https://upmostly.com/tutorials/react-background-image */}
        <div
          className="image"
          style={{ backgroundImage: `url(${picture1})` }}
        ></div>

        <p>
          <span>Platzhalter-Text1</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam impedit
          eum tenetur architecto odit possimus explicabo ea? Deleniti tempora
          impedit modi autem error corrupti ut eveniet inventore possimus nulla
          dicta architecto fuga pariatur obcaecati, iste doloremque totam
          laudantium beatae consequatur magnam! Beatae dolorum non facilis sequi
          numquam id architecto hic.
        </p>
        <Button />
      </section>
      <hr />
      <section>
        <div
          className="image"
          style={{ backgroundImage: `url(${picture2})` }}
        ></div>
        <h1>Anlässe</h1>
        <p>
          <span>Platzhalter-Text2</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam impedit
          eum tenetur architecto odit possimus explicabo ea? Deleniti tempora
          impedit modi autem error corrupti ut eveniet inventore possimus nulla
          dicta architecto fuga pariatur obcaecati, iste doloremque totam
          laudantium beatae consequatur magnam! Beatae dolorum non facilis sequi
          numquam id architecto hic.
        </p>
        <div
          className="image"
          style={{ backgroundImage: `url(${picture3})` }}
        ></div>
      </section>

      <section>
        
      </section>
    </main>
  );
}
