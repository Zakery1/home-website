import React from "react";
import pdf from "../../document/resume.pdf";
import "./Resume.scss";

import Paper from "@material-ui/core/Paper";

function Resume() {
  return (
    <div>
      <ul className="zg-resume-paper">
        <li>Tech</li>
        <li>Experience</li>
        <li>Other experience</li>
        <li>Npm Modules</li>
        <li>Education</li>
      </ul>
      <a href={pdf} rel="noopener noreferrer" target="_blank">
        <img
          className="zg-pdf-logo"
          src={require("../../asset/pdf-logo.png")}
          alt="pdf logo"
        />
        <br />
      </a>
    </div>
  );
}

export default Resume;
