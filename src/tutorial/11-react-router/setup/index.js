import React from "react";
// lesson 75/76
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/people">
        <People />
      </Route>
    </Router>
  );
};

export default ReactRouterSetup;
