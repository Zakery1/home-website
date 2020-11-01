import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from "react-responsive-carousel";

import {
  BigClouds,
  Camelback,
  Chuckwalla,
  EchoCanyon,
  RedMountain,
  ScottsdaleSnow,
  Sunset,
} from "../../asset/photography";

import "./Photography.scss";

const photoArray = [
  BigClouds,
  Camelback,
  Chuckwalla,
  EchoCanyon,
  RedMountain,
  ScottsdaleSnow,
  Sunset,
];

export default function Photography() {
  const photos = photoArray.map((photo) => {
    return (
      <div key={photo.toString()} className="zg-photos">
        <img className="zg-photo" src={photo} alt="Zak" />
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
