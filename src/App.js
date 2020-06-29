import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="special">Zachary Graham</h1>
      <a href="./document/resume.pdf" target="_blank" rel="noopener noreferrer">
        <img className="pdf-logo" src={ require('./asset/pdf-logo.png') } alt="pdf logo"/>
        <br/>
      </a>
      <label>Resume</label>
    </div>
  );
}

export default App;
