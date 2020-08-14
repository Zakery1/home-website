import React from "react";

import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

import bigClouds from "../../../asset/photography/bigclouds.jpg";

import "./PhotoModal.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <img
        onClick={handleClickOpen}
        className="zg-page-photo"
        src={bigClouds}
        alt="nature photo"
      />

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth="false"
        maxHeight="false"
      >
        <img
          onClick={handleClickOpen}
          className="zg-photo-modal"
          src={bigClouds}
          alt="nature photo"
        />
      </Dialog>
    </div>
  );
}
