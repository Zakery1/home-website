import React from "react";
import './Home.scss';

import Paper from "@material-ui/core/Paper";

function Home() {
  return (
    <div>
      <img className="zg-headshot" src={require("../../asset/zachary-headshot.png")} alt="zg-headshot"></img>
      <Paper className="zg-home-paper">Hi, I'm Zak.</Paper>
    </div>
  );
}

export default Home;
