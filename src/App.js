import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CourseHome from "./components/course/CourseHome";
import Home from "./components/home/Home";
import { AuthLogin } from "./components/login/AuthLogin";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" >
            <AuthLogin />
          </Route>
          <Route path="/courses">
            <CourseHome />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
