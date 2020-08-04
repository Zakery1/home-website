import React from "react";
import "./Podcast.scss";
import Button from '@material-ui/core/Button';

function Podcast() {
  return (
    <div>
      <img
        className="zg-podcast-logo"
        src={require("../asset/podcast-logo.jpg")}
        alt="podcast-logo"
      ></img>
      <br />
      <br />
      <Button variant="contained" className="zg-podcast-link" target="_blank" href="https://stage-18.netlify.app/">
        Visit Podcast Homepage
      </Button>
    </div>
  );
}

export default Podcast;
