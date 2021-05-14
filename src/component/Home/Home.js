import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="zg-home-container">
      <img
        className="zg-headshot"
        src="https://photography-zg.s3-us-west-2.amazonaws.com/zachary-headshot.png"
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
      <span className="zg-link zg-live-websites-header" href="https://github.com/Zakery1/home-website">
        Lives sites
      </span>

      <a className="zg-link zg-live-site" href="https://zg-debates.netlify.app/">ZG-Debates: <br/>Topic Discussion Platform</a>
      <a className="zg-link zg-live-site" href="https://stage18podcast.com/">Podcast Home Page</a>

    </div>
  );
}

export default Home;
