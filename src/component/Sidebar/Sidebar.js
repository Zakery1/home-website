import React from "react";
import "./Sidebar.scss";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />

      <Link to="/Resume">resume</Link>
      <br />

      <Link to="/Calendar">Schedule a meeting</Link>
      <br />
      <Link to="/Podcast">Podcast</Link>
      <br />
      <Link to="/Photography">Photography</Link>
      <br />
    </div>
  );
}

export default Sidebar;
