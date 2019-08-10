import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import History from "./components/History/History";
import Contact from './components/Contact/Contact.js';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/history" component={History} />
    <Route path="/contact" component={Contact} />
    <Route
      path="*"
      render={() => (
        <img
          src="https://cdn.dribbble.com/users/632789/screenshots/2710178/404_gif_2.gif"
          alt="404"
        />
      )}
    />
  </Switch>
);