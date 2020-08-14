import React from "react";
import "./App.scss";

import { makeStyles } from "@material-ui/core/styles";

import Sidebar from "./component/Sidebar/Sidebar";

import routes from "./routes";

function App() {
  const useStyles = makeStyles(() => ({
    "@global": {
      body: {
        backgroundColor: "rgb(235, 235, 235)",
      },
    },
  }));
  useStyles();

  return (
    <div className="App">
      <Sidebar />
      <div className="zg-routes">{routes()}</div>
    </div>
  );
}

export default App;
