import React, { Component } from "react";
import "./App.css";
import Login from "./login.js";
import PageHome from "./pageHome.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={PageHome}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
