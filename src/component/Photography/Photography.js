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
      <div key={photo.toString()} className="zg-photos-container">
        <img
          style={{ marginTop: "20px" }}
          className="zg-page-photo"
          src={photo}
          alt="nature"
        />
      </div>
    );
  });

  return <div> {photos}</div>;
}

