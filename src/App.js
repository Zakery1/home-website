import React from 'react';
import './App.css';


import pdf from './document/resume.pdf';

function App() {
  return (
    <div className="App">
      <h1 className="special">Zachary Graham</h1>
      <a href={pdf} rel="noopener noreferrer" target="_blank" >
        <img className="pdf-logo" src={ require('./asset/pdf-logo.png') } alt="pdf logo"/>
        <br/>
      </a>
      <label>Resume</label>
    </div>
  );
}

export default App;
