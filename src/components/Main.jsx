import React from "react";

import "./Main.css";
import Button from "./Button";
import UpButton from "./UpButton";
import Slider from "./Slider";

// import images for background images
import picture1 from "../images/picture1.png";
import picture2 from "../images/picture2.png";
import picture3 from "../images/picture3.png";

export default function Main() {
  const playMovie = (e) => {
    e.target.play();
  };
  const stopMovie = (e) => {
    e.target.pause();
  };

  return (
    <main>
      <section>
        <div className="main_center">
          <h1>Herzlich Willkommen bei Nafas</h1>
          <div
            className="main_image"
            style={{ backgroundImage: `url(${picture1})` }}
          ></div>
          <div className="main overlay">Bild 1</div>
        </div>
        {/* https://upmostly.com/tutorials/react-background-image */}

        <div className="main_text1">
          <p>
            <span>Nafas </span>
            bedeutet in der arabischen Sprache „ein Gefühl und Geschmack für
            besonderes Essen“ zu haben. Speziell in Syrien hat die kulinarische
            Küche einen hohen Stellenwert. Aus diesem Grund will ihnen das Team
            von Nafas einen Einblick in die Vielfalt der syrischen Küche geben.
            Wählen Sie aus verschiedenen Gerichten und Pakete aus. Egal welche
            Feierlichkeiten Sie planen, wir sorgen für einen unvergesslichen
            kulinarischen Moment. Unser Anspruch ist es, Ihnen frische,
            außergewöhnliche und vielfältige Speisen auf Ihrem event zu zaubern.
          </p>
          <Button />
        </div>
      </section>

      <hr />

      <section>
        <div className="main_event main_1">
          <div className="main_center">
            <div
              className="main_image"
              style={{ backgroundImage: `url(${picture2})` }}
            ></div>
            <div className="main overlay">Bild 2</div>
          </div>

          <div className="main_center main_text1">
            <h1>Anlässe</h1>
            <p>
              <span>Schaffen </span>
              Sie einen unvergesslichen Moment und wählen Sie aus unseren
              zusammengestellten Paketen. Auch individuelle Pakete sind möglich.
              Nafas hat sich auf kleine events spezialisiert, sodass wir
              Bestellungen für bis zu 50 Gäste annehmen. Egal ob Geburtstag,
              Teamevent, Einweihungsfeier oder weitere besondere Anlässe, wir
              machen Ihr event zu einem unvergesslichen Moment.
            </p>
          </div>
        </div>

        <div className="main_event ">
          <div
            className="main_image"
            style={{ backgroundImage: `url(${picture3})` }}
          ></div>
          <div className="main overlay">Bild 3</div>

          <Button />
        </div>
      </section>

      <hr />

      <section>
        <div className="main_video">
          <video
            controls
            muted="true"
            // mobile version
            // onClick={playMovie}
            // PC version
            onMouseOver={playMovie}
            onMouseOut={stopMovie}
          >
            <source src="images/video_nafas.mp4" type="video/mp4" />
          </video>
          <div className="main overlay">Video 1</div>
        </div>
      </section>

      <hr />

      <section>
        <div className="main_text1">
          <p>
            <span>Verwöhnen </span>
            Sie Ihre Gäste mit kulinarischen Besonderheiten aus dem Orient.
          </p>
        </div>

        <div className="main_slider">
          <Slider />
          <div className="main overlay">Bild(er) 4</div>
        </div>
      </section>

      <UpButton />
    </main>
  );
}
