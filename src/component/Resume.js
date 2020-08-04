import React from "react";
import pdf from '../document/resume.pdf'

function Resume() {
  return (
    <div>
      <a href={pdf} rel="noopener noreferrer" target="_blank">
        <img
          className="pdf-logo"
          src={require("../asset/pdf-logo.png")}
          alt="pdf logo"
        />
        <br />
      </a>
    </div>
  );
}

export default Resume;
