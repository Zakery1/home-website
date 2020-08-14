import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import PhotoModal from "./modal/PhotoModal";

import './Photography.scss';

import bigClouds from "../../asset/photography/bigclouds.jpg";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Photography() {
  const classes = useStyles();
  return (
    <div>
      <PhotoModal />
    </div>
  );
}

export default Photography;
