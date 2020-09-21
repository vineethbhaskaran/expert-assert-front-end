import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CourseHome from "./components/course/CourseHome";
import Home from "./components/home/Home";
import Login from "./components/login/Login";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Switch>
          <Route path="/login(/)?" >
            <Login />
          </Route>
          <Route path="/courses">
            <CourseHome />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
