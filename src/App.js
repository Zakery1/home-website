import React from 'react';
import logo from './logo.svg';
import './App.css';
import './document/special.css';
import pdf from './document/resume.pdf';

function App() {
  return (
    <div className="App">
      <h1 className="special">Zachary Graham</h1>
      <a href={pdf}>View Resume</a>

    </div>
  );
}

export default App;
