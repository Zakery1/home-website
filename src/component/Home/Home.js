import React from "react";
import './Home.scss';

function Home() {
  return (
    <div>
      <img className="zg-headshot" src={require("../../asset/zachary-headshot.png")} alt="zg-headshot"></img>
      <p className="zg-home-paper">Hi, I'm Zak.</p>
    </div>
  );
}

export default Home;
