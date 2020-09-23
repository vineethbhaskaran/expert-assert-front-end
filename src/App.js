import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CourseHome from "./components/course/CourseHome";
import Home from "./components/home/Home";
import { Login } from "./components/login/Login";
import Auth from './components/auth/Auth'

const auth=new Auth();
class App extends Component {
  constructor(){
    super();
    this.state ={
      auth
    }
  }
  render() {
    return (
      <div>
        <Switch>
        <Route path="/" exact>
            <Home auth={this.state.auth}/>
          </Route>
          <Route path="/login" >
            <Login auth={this.state.auth}/>
          </Route>
          <Route path="/courses">
            <CourseHome auth={this.state.auth}/>
          </Route>
          
        </Switch>
      </div>
    );
  }
}

export default App;
