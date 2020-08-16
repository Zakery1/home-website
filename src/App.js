import React from "react";
import "./App.scss";

import Photography from './component/Photography/Photography';
import Podcast from './component/Podcast/Podcast';
import Calendar from "./component/Calendar/Calendar";
import Resume from './component/Resume/Resume';
import Home from './component/Home/Home';
import Sidebar from "./component/Sidebar/Sidebar";

import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="zg-routes">{routes()}</div>
      <Home />
      <Resume />
      <Podcast />
      <Photography />
      <Calendar />
    </div>
  );
}

export default App;
