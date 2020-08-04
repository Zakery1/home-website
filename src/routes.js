import React from "react";
import { Route, Switch } from "react-router-dom";
import {withRouter} from 'react-router';
import Photography from './component/Photography';
import Podcast from './component/Podcast';
import Calendar from "./component/Calendar";
import Resume from './component/Resume';
import Home from './component/Home';

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
