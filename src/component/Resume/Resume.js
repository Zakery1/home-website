import React from "react";
import pdf from "../../document/resume.pdf";
import "./Resume.scss";

import Paper from "@material-ui/core/Paper";

function Resume() {
  return (
    <div>
      <Paper className="zg-resume-paper">
        <p>Almost before we knew it, we had left the ground.</p>
        <p>Experience</p>
        <p>Other experience</p>
        <p>Npm Modules</p>
        <p>Education</p>
      </Paper>
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
