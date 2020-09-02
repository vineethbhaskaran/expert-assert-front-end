import React, { Component } from "react";

class CourseStatusLeftPanel extends Component {
  render() {
    return (
      <div className="col-2 panel-full-height  bg-white">
        <button className="btn btn-primary btn-block mt-1">New Course</button>
        <ul className="list-group list-group-flush mt-2">
          <li className="list-group-item p-0">All</li>
          <li className="list-group-item p-0">In Progress</li>
          <li className="list-group-item p-0">
            completed <span className="badge">2</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default CourseStatusLeftPanel;
