// https://www.kindacode.com/article/react-how-to-create-an-image-carousel-from-scratch/


import React from "react";
import { useState } from 'react';

import "./Slider.css";

// this array holds the data for the carousel
const photos = [
  {
    id: 'p1',
    title: 'Musakhan',
    url: 'images/slider 1.jpg',
  },
  {
    id: 'p2',
    title: 'Yalangi Weinblätter',
    url: 'images/slider 2.jpg',
  },
  {
    id: 'p3',
    title: 'Fatayer Käse',
    url: 'images/slider 3.jpg',
  },
  {
    id: 'p4',
    title: 'Humus',
    url: 'images/slider 4.jpg',
  },
  {
    id: 'p5',
    title: 'Sambusak Hackfleisch',
    url: 'images/slider 5.jpg',
  },
  {
    id: 'p6',
    title: 'Griess und Mascarpone Rolle',
    url: 'images/slider 6.jpg',
  },
  {
    id: 'p7',
    title: 'Mutabal',
    url: 'images/slider 7.jpg',
  },
  {
    id: 'p8',
    title: 'Mini Pancake mit Macarpone und Pistazien',
    url: 'images/slider 8.jpg',
  },
  {
    id: 'p9',
    title: 'Mutabal',
    url: 'images/slider 9.jpg',
  },
  {
    id: 'p10',
    title: 'Fatayer Käse',
    url: 'images/slider 10.jpg',
  },
  {
    id: 'p11',
    title: 'Yalangi Weinblätter',
    url: 'images/slider 11.jpg',
  },
  {
    id: 'p12',
    title: 'Omelet',
    url: 'images/slider 12.jpg',
  }
];


export default function Slider() {

  // show the photo with this index
  const [currentIndex, setCurrentIndex] = useState(0);

  // move to the next photo
  // if we are at the end, go to the first photo
  const next = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  // move to the previous photo
  // if we are at the beginning, go to the last photo
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };


  return (
    <>
      {/* Render the carousel/slider */}
      <div className='slider-container'>
        {photos.map((photo) => (
          <div
            key={photo.id}

            // if the photo is the current photo, show it
            className={
              photos[currentIndex].id === photo.id ? 'fade' : 'slide fade'
            }
          >
            <img src={process.env.PUBLIC_URL + photo.url} alt={photo.title} className='photo' />
            {/* background shade to show caption */}
            <div className="shade"></div>
            {/* name of picture from db */}
            <div className='caption'>{photo.title}</div>
            {/* {console.log(photo.url)}; */}
          </div>
        ))}

        {/* Previous button */}
        <button onClick={prev} className='prev'>
          &lt;
        </button>

        {/* Next button */}
        <button onClick={next} className='next'>
          &gt;
        </button>
      </div>

      {/* Render dots indicator */}
      <div className='dots'>
        {photos.map((photo) => (
          <span
            key={photo.id}
            // highlight the dot that corresponds to the current photo
            className={
              photos[currentIndex].id === photo.id ? 'dot active' : 'dot'
            }
            // when the user clicks on a dot, go to the corresponding photo
            onClick={() => setCurrentIndex(photos.indexOf(photo))}
          ></span>
        ))}
      </div>
    </>
  );
}
