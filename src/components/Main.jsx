import React from "react";

import "./Main.css";

// import images for background images
import picture1 from "../images/picture1.png";

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
      </section>
      <hr />
      <section>
      <p>
          <span>Platzhalter-Text2</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam impedit
          eum tenetur architecto odit possimus explicabo ea? Deleniti tempora
          impedit modi autem error corrupti ut eveniet inventore possimus nulla
          dicta architecto fuga pariatur obcaecati, iste doloremque totam
          laudantium beatae consequatur magnam! Beatae dolorum non facilis sequi
          numquam id architecto hic.
        </p>
      </section>

      <section>
        
      </section>

    </main>
  );
}
