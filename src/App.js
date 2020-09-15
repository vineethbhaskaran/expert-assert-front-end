import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CourseHome from "./components/course/CourseHome";
import Home from "./components/home/Home";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
          <Route path="/home">
              <Home />
            </Route>
            <Route path="/courses">
              <CourseHome />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
