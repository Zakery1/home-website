import React from "react";
import pdf from "../../document/resume.pdf";
import "./Resume.scss";

function Resume() {
  return (
    <div>
      <div className="zg-resume">
        <h2 className="zg-resume-header">I've worked with:</h2>
        <div className="zg-knowledge-container">
          <div className="zg-knowledge-column">
            <li>React</li>
            <li>Angular</li>
            <li>.NET</li>
            <li>NodeJS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Netlify</li>
            <li>AWS</li>
            <li>C#</li>
            <li>HTML5</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </div>
          <div className="zg-knowledge-column">
            <li>Heroku</li>
            <li>Atlas</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>Material UI</li>
            <li>Java</li>
            <li>PHP</li>
            <li>PostGreSQL</li>
            <li>SQL Server</li>
            <li>MySQL</li>
            <li>Knockout.js</li>
            <li>JQuery</li>
          </div>
        </div>
        <a className="zg-resume-link" href={pdf} rel="noopener noreferrer" target="_blank">
          View Resume PDF
          <br />
        </a>
      </div>
    </div>
  );
}

export default Resume;
