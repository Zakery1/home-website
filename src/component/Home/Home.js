import React from "react";
import './Home.scss';

function Home() {
  return (
    <header className="zg-home-container">
      <img className="zg-headshot" src={require("../../asset/zachary-headshot.png")} alt="zg-headshot"></img>
      <p className="zg-home-description">Hi, I'm Zak.</p>
    </header>
  );
}

export default Home;
