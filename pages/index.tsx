import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from "../layouts";

export default function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/about">
            <h2>About</h2>
          </Route>
          <Route exact path="/">
            <h2>Home</h2>
          </Route>
          <Route>
            <h2>Not found!</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
