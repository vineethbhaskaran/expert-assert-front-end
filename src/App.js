import React, { Component } from 'react';
import './App.css';
import CourseHome from './components/CourseHome';

class App extends Component{
  componentDidMount() {
  
  }
   
  render(){
   
    return (
      <div className="App">
       <CourseHome/>
      </div>
    );
  }
}

export default App;
