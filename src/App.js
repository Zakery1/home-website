import React from 'react';
import './App.css';

import pdf from './document/resume.pdf';


function App() {
  return (
    <div className="App">
      <h1 className="special">Zachary Graham</h1>
      <a aria-required="true" href={pdf} target="_blank" rel="noopener noreferrer">
        <img className="pdf-logo" src={ require('./asset/pdf-logo.png') } alt="pdf logo"/>
        <br/>
      </a>
      <a >Resume</a>
    </div>
  );
}

export default App;
