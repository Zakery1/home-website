import React from "react";
import pdf from '../../document/resume.pdf';
import './Resume.scss'

function Resume() {
  return (
    <div>
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
