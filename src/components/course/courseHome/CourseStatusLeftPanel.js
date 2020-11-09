import React from "react";
import { Link } from "react-router-dom";

function CourseStatusLeftPanel() {
  return (
    <div className="col-2 panel-full-height  bg-white">
      <Link to="/courses/create" className="btn btn-primary btn-block mt-1">
        New Course
      </Link>
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

export default CourseStatusLeftPanel;
