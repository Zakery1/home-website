import React from "react";

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
        <img className="zg-photo" src={photo} alt="Zak"/>
      </div>
    );
  });

  return <div className="zg-photography-container">
    <h2 className="zg-photography-header">Photography</h2>
    {photos}
    </div>;
}
