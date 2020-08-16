import React from "react";
import "./App.scss";

import Photography from "./component/Photography/Photography";
import Podcast from "./component/Podcast/Podcast";
import Calendar from "./component/Calendar/Calendar";
import Resume from "./component/Resume/Resume";
import Home from "./component/Home/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Resume />
      <Podcast />
      <Photography />
      <Calendar />
    </div>
  );
}

export default App;
