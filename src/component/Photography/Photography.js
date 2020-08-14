import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import PhotoModal from "./modal/PhotoModal";

import './Photography.scss';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Photography() {
  useStyles();
  return (
    <div>
      <PhotoModal />
    </div>
  );
}

export default Photography;
