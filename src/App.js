import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import CourseHome from "./components/course/courseHome/CourseHome";
import Home from "./components/home/Home";
import { Login } from "./components/login/Login";
import Auth from "./components/auth/Auth";
import CreateCourse from "./components/course/createCourse/CreateCourse";
import { Provider } from "react-redux";
import store from './reduxUtils/store';
import CourseDetails from "./components/course/courseDetail/CourseDetails";
import SectionWriteMode from "./components/section/SectionWriteMode";

const auth = new Auth();
class App extends Component {
  constructor() {
    super();
    this.state = {
      auth,
    };
  }
  render() {
    return (
      <Provider store={store}>
        <div>
          <Switch>
            <Route path="/" exact>
              <Home auth={this.state.auth} />
            </Route>
            <Route path="/login">
              <Login auth={this.state.auth} />
            </Route>
            <Route path="/courses/create">
              <CreateCourse auth={this.state.auth} />
            </Route>
            <Route path="/courses/courseDetail">
                <CourseDetails auth={this.state.auth}/>
            </Route>
            <Route path="/courses">
              <CourseHome auth={this.state.auth} />
            </Route>

            <Route path="/section/create">
              <SectionWriteMode auth={this.state.auth}/>
            </Route>
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
