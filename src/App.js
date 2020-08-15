import React from "react";
import "./App.scss";

import Sidebar from "./component/Sidebar/Sidebar";

import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="zg-routes">{routes()}</div>
    </div>
  );
}

export default App;
