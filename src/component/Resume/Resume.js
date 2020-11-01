import React from "react";
import pdf from "../../document/resume.pdf";
import "./Resume.scss";

function Resume() {
  return (
    <div className="zg-resume-container">
      <h2 className="zg-resume-header">I've worked with:</h2>
      <div className="zg-knowledge-container">
        <div className="zg-knowledge-column">
          <div className="zg-skill">React</div>
          <div className="zg-skill">Angular</div>
          <div className="zg-skill">.NET</div>
          <div className="zg-skill">NodeJS</div>
          <div className="zg-skill">JavaScript</div>
          <div className="zg-skill">TypeScript</div>
          <div className="zg-skill">Netdivfy</div>
          <div className="zg-skill">AWS</div>
          <div className="zg-skill">C#</div>
          <div className="zg-skill">HTML5</div>
          <div className="zg-skill">MongoDB</div>
          <div className="zg-skill">Mongoose</div>
        </div>
        <div className="zg-knowledge-column">
          <div className="zg-skill">Heroku</div>
          <div className="zg-skill">Atlas</div>
          <div className="zg-skill">CSS</div>
          <div className="zg-skill">SASS</div>
          <div className="zg-skill">Material UI</div>
          <div className="zg-skill">Java</div>
          <div className="zg-skill">PHP</div>
          <div className="zg-skill">PostGreSQL</div>
          <div className="zg-skill">SQL Server</div>
          <div className="zg-skill">MySQL</div>
          <div className="zg-skill">Knockout.js</div>
          <div className="zg-skill">JQuery</div>
        </div>
      </div>
      <a
        className="zg-resume-link"
        href={pdf}
        rel="noopener noreferrer"
        target="_blank"
      >
        View Resume PDF
      </a>
    </div>
  );
}

export default Resume;
