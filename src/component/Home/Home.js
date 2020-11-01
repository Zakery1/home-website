import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="zg-home-container">
      <img
        className="zg-headshot"
        src={require("../../asset/zachary-headshot.png")}
        alt="zg-headshot"
      ></img>
      <p className="zg-home-description">
        I'm Zak. I'm a web developer, credited <br /> photographer and movie
        podcast host.
      </p>
      <br />
      <div className="zg-link-holder">
        <a className="zg-link" href="https://www.linkedin.com/in/zakgraham/">
          LinkedIn
        </a>
        <a className="zg-link" href="https://www.github.com/zakery1">
          Github
        </a>
        <a className="zg-link" href="https://github.com/Zakery1/home-website">
          Site Repository
        </a>
        <br />
      </div>
    </div>
  );
}

export default Home;
