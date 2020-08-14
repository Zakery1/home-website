import React from "react";

import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

import {
  BigClouds,
  Camelback,
  Chuckwalla,
  EchoCanyon,
  RedMountain,
  ScottsdaleSnow,
  Sunset,
} from "../../../asset/photography";

import "./PhotoModal.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const photoArray = [
  BigClouds,
  Camelback,
  Chuckwalla,
  EchoCanyon,
  RedMountain,
  ScottsdaleSnow,
  Sunset,
];

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const photos = photoArray.map((photo) => {
    return (
      <div key={photo.toString()} className="zg-photos-container">
        <img style={{marginTop: "20px"}}
          onClick={handleClickOpen}
          className="zg-page-photo"
          src={photo}
          alt="nature"
        />

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          maxWidth={false}
        >
          <img
            onClick={handleClickOpen}
            className="zg-photo-modal"
            src={photo}
            alt="nature"
          />
        </Dialog>
      </div>
    );
  });

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return <div> {photos}</div>;
}
