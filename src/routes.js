import React from "react";
import { Route, Switch } from "react-router-dom";
import {withRouter} from 'react-router';
import Photography from './component/Photography/Photography';
import Podcast from './component/Podcast/Podcast';
import Calendar from "./component/Calendar/Calendar";
import Resume from './component/Resume/Resume';
import Home from './component/Home/Home';

export default function routes() {
  return (
    <Switch>
      <Route path="/Calendar" component={withRouter(Calendar)} />
      <Route path="/Resume" component={Resume} />
      <Route path="/Podcast" component={Podcast} />
      <Route path="/Photography" component={Photography} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}
