import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; 


import { Carousel } from "react-responsive-carousel";

import "./Photography.scss";

const photoArray = [
  "bigclouds",
  "camelback",
  "chuckwalla",
  "echocanyon",
  "redmountain",
  "scottsdalesnow",
  "sunset",
];

export default function Photography() {
  const photos = photoArray.map((photo) => {
    return (
      <div key={photo.toString()} className="zg-photos">
        <img className="zg-photo" src={`https://photography-zg.s3-us-west-2.amazonaws.com/${photo}.jpg`} alt="Zak" />
      </div>
    );
  });

  return (
    <div className="zg-photography-container">
      <h2 className="zg-photography-header">Photography</h2>
      <div className="zg-carousel-container"></div>
      <Carousel>{photos}</Carousel>
    </div>
  );
}
